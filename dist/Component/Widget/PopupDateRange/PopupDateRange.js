import * as React from "react";
const moment = require("moment");
const enhanceWithClickOutside = require("react-click-outside");
import PopupContainer from "./PopupContainer";
class PopupDateRangeInner extends React.Component {
    constructor(props) {
        super(props);
        this.show = (event) => {
            event.preventDefault();
            this.setState({ opened: !this.state.opened });
        };
        this.hide = (vent) => {
            this.setState({ opened: false });
        };
        this.handleClickOutside = () => {
            this.setState({ opened: false });
        };
        this.onChange = (dateRange, isHide) => {
            let from = moment(dateRange.from).format("MM.DD.YYYY");
            let to = moment(dateRange.to).format("MM.DD.YYYY");
            if (this.props.onChange) {
                this.props.onChange(`${from}-${to}`);
            }
            this.setState({ selectedValue: `${from}-${to}`, opened: !isHide });
        };
        this.inputOnChange = (event) => {
            this.setState({ selectedValue: event.target.value });
        };
        this.componentWillReceiveProps = (nextProps) => {
            if (this.props.value !== nextProps.value) {
                this.setState({ selectedValue: nextProps.value });
            }
        };
        this.state = {
            opened: false,
            selectedValue: this.props.value
        };
    }
    render() {
        let userInfoPopup = null;
        if (this.state.opened) {
            userInfoPopup = React.createElement(PopupContainer, {value: this.state.selectedValue, onChange: this.onChange, isInline: this.props.isInline});
        }
        let style = {};
        if (this.props.isInline) {
            style = { display: "inline-block" };
        }
        return (React.createElement("div", {className: "dropdown-container" + (this.state.opened ? " show" : ""), style: style}, 
            React.createElement("div", {className: "form-group form-date"}, 
                React.createElement("input", {type: "text", className: "form-input", ref: "container", value: this.state.selectedValue, onChange: this.inputOnChange}), 
                React.createElement("button", {onClick: this.show, className: "form-date-picker btn-clear b-icon icon-date-pick"})), 
            React.createElement("div", {className: "dropdown-list", ref: "dropdown-list"}, 
                React.createElement("div", null, userInfoPopup)
            )));
    }
}
export const PopupDateRange = enhanceWithClickOutside(PopupDateRangeInner);
