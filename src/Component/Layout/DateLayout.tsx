
import * as React from "react";
import {changeDateToCurrentTimeZone, IFnChangeDateToCurrentTimeZone} from "../../Component/Logic/changeDateToCurrentTimeZone";
import {checkCorrectDate, IFnCheckCorrectDate} from "../../Component/Logic/checkCorrectDate";
import {dateToString} from "../../Component/Logic/dateTimeFormats";
import {DateParseException} from "../../Exception/DateParseException";

import {Dash} from "../../Component/Elemental/Dash";
import {DateOnly} from "../../Component/Elemental/DateOnly";

export interface IProps { data: any; }

export interface IState { }

export class DateLayout extends React.Component<IProps, IState> {

//    private _fnChangeDateToCurrentTimeZone: (date: any) => Date;
    private _fnCheckCorrectDate: IFnCheckCorrectDate;
    private _fnChangeDateToCurrentTimeZone: IFnChangeDateToCurrentTimeZone;

    constructor(props: IProps) {
        super(props);

        this.fnCheckCorrectDate = checkCorrectDate;
        this.fnChangeDateToCurrentTimeZone = changeDateToCurrentTimeZone;
    }

    get fnCheckCorrectDate(): IFnCheckCorrectDate {
        return this._fnCheckCorrectDate;
    }
    set fnCheckCorrectDate(value: IFnCheckCorrectDate) {
        this._fnCheckCorrectDate = value;
    }

    get fnChangeDateToCurrentTimeZone(): IFnChangeDateToCurrentTimeZone {
        return this._fnChangeDateToCurrentTimeZone;
    }

    set fnChangeDateToCurrentTimeZone(value: IFnChangeDateToCurrentTimeZone) {
        this._fnChangeDateToCurrentTimeZone = value;
    }

    public render(): JSX.Element {
        try {
            const stringDate = this.props.data;
                dateToString(this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data)), "MMM D, YYYY");

            return <DateOnly date={stringDate}/>;
        } catch (ex) {
            if (ex instanceof DateParseException) {
                return <Dash/>;
            } else {
                throw ex;
            }
        }
    }
}