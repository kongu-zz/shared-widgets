import * as React from "react";
import * as reactWidgets from "react-widgets";
const Calendar = reactWidgets.Calendar;
import "react-widgets/lib/less/react-widgets.less";
const moment = require("moment");
const momentLocalizer = require("react-widgets/lib/localizers/moment");
momentLocalizer(moment);
import {IDateRange} from "./IDateRange";

export interface IProps { value?: string; onChange?: (dateRange: IDateRange, isHide?: boolean) => void;  }

export interface IState { from?: Date; to?: Date; }

export default class PopupContainer extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = this.parseValue(this.props.value);
    }

    private parseValue(value?: string): IDateRange {
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

    private fromChange = (date?: Date): void => {
        this.setState({
            from: date
        });

        let returnedState = {
            from: date,
            to: this.state.to
        } as IDateRange;

        if (this.props.onChange) {
            this.props.onChange(returnedState);
        }
    };

    private toChange = (date?: Date): void => {
        this.setState({
            to: date
        });

        let returnedState = {
            from: this.state.from,
            to: date
        } as IDateRange;

        if (this.props.onChange) {
            this.props.onChange(returnedState, true);
        }
    };

    public render(): JSX.Element {
        return (
            <div>
                <div style={{width: "578px", height: "348px", position: "relative", backgroundColor: "#fff", border: "solid 1px #ddd"}}>
                    <div style={{width: "578px", position: "absolute"}}>
                        <div style={{float: "left", width: "259px", margin: "20px 20px 20px 20px"}}>
                            <Calendar defaultValue={this.state.from} onChange={this.fromChange}/>
                        </div>
                        <div style={{float: "left", width: "259px", margin: "20px 20px 20px 0"}}>
                            <Calendar defaultValue={this.state.to} onChange={this.toChange}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};