import * as React from "react";
import * as reactWidgets from "react-widgets";
const Calendar = reactWidgets.Calendar;
import "react-widgets/lib/less/react-widgets.less";
const moment = require("moment");
const momentLocalizer = require("react-widgets/lib/localizers/moment");
momentLocalizer(moment);
export default class PopupContainer extends React.Component {
    constructor(props) {
        super(props);
        this.fromChange = (date) => {
            this.setState({
                from: date
            });
            let returnedState = {
                from: date,
                to: this.state.to
            };
            if (this.props.onChange) {
                this.props.onChange(returnedState);
            }
        };
        this.toChange = (date) => {
            this.setState({
                to: date
            });
            let returnedState = {
                from: this.state.from,
                to: date
            };
            if (this.props.onChange) {
                this.props.onChange(returnedState, true);
            }
        };
        this.state = this.parseValue(this.props.value);
    }
    parseValue(value) {
        if (value) {
            let splited = value.split("-");
            if (splited.length > 1) {
                return {
                    from: moment(splited[0]).toDate(),
                    to: moment(splited[1]).toDate()
                };
            }
        }
        return {
            from: new Date(),
            to: new Date()
        };
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement("div", {style: { width: "578px", height: "348px", position: "relative", backgroundColor: "#fff", border: "solid 1px #ddd" }}, 
                React.createElement("div", {style: { width: "578px", position: "absolute" }}, 
                    React.createElement("div", {style: { float: "left", width: "259px", margin: "20px 20px 20px 20px" }}, 
                        React.createElement(Calendar, {defaultValue: this.state.from, onChange: this.fromChange})
                    ), 
                    React.createElement("div", {style: { float: "left", width: "259px", margin: "20px 20px 20px 0" }}, 
                        React.createElement(Calendar, {defaultValue: this.state.to, onChange: this.toChange})
                    ))
            )
        ));
    }
}
;
