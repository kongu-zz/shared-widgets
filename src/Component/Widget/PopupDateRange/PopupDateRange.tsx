
import * as React from "react";
import * as ReactDom from "react-dom";
import classNames from "classnames";
const moment = require("moment");
const enhanceWithClickOutside = require("react-click-outside");
import PopupContainer from "./PopupContainer";
import {IDateRange} from "./IDateRange";

export interface IProps { value?: string; onChange?: (value: any) => void; isInline?: boolean; onDateSelected?: (dateRange: IDateRange) => void; }

export interface IState { opened?: boolean; selectedValue?: string; }

class PopupDateRangeInner extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            opened: false,
            selectedValue: this.props.value
        };
    }

    private show = (event: React.MouseEvent): void => {
        event.preventDefault();

        this.setState({ opened: !this.state.opened });
    };

    private hide = (vent: MouseEvent): void => {

        this.setState({ opened: false });
    };

    private handleClickOutside = () => {
        this.setState({ opened: false });
    }

    private onChange = (dateRange: IDateRange, isHide: boolean): void => {
        let from = moment(dateRange.from).format("MM.DD.YYYY");
        let to = moment(dateRange.to).format("MM.DD.YYYY");

        if (this.props.onChange) {
            this.props.onChange(`${from}-${to}`);
        }

        this.setState({ selectedValue: `${from}-${to}`, opened: !isHide });

        if (isHide && this.props.onDateSelected) {
            this.props.onDateSelected(dateRange);
        }
    };

    private inputOnChange = (event: React.MouseEvent & React.KeyboardEvent): void => {
        this.setState({ selectedValue: (event.target as HTMLInputElement).value });


        if (this.props.onChange) {
            this.props.onChange((event.target as HTMLInputElement).value);
        }
    };

    private componentWillReceiveProps = (nextProps: IProps) => {
        if (this.props.value !== nextProps.value) {
            this.setState({ selectedValue: nextProps.value });
        }
    }

    public render(): JSX.Element {
        let userInfoPopup: JSX.Element = null;
        if (this.state.opened) {
            userInfoPopup = <PopupContainer value={this.state.selectedValue}  onChange={this.onChange} isInline={this.props.isInline}/>;
        }
        let style = {};
        if (this.props.isInline) {
            style = {display: "inline-block"};
        }

        return (
            <div className={"dropdown-container" + (this.state.opened ? " show" : "") } style={style}>
                <div className="form-group form-date">
                    <input type="text" className="form-input" ref="container" value={this.state.selectedValue} onChange={this.inputOnChange}/>
                    <button onClick={this.show} className="form-date-picker btn-clear b-icon icon-date-pick"></button>
                </div>
                <div className="dropdown-list"  ref="dropdown-list">
                    <div>
                        {userInfoPopup}
                    </div>
                </div>
            </div>
        );
    }
}

export const PopupDateRange: any = enhanceWithClickOutside(PopupDateRangeInner);