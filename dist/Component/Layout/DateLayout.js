import * as React from "react";
import { changeDateToCurrentTimeZone } from "../../Component/Logic/changeDateToCurrentTimeZone";
import { checkCorrectDate } from "../../Component/Logic/checkCorrectDate";
import { dateToString } from "../../Component/Logic/dateTimeFormats";
import { Dash } from "../../Component/Elemental/Dash";
import { DateOnly } from "../../Component/Elemental/DateOnly";
export class DateLayout extends React.Component {
    constructor(props) {
        super(props);
        this.fnCheckCorrectDate = checkCorrectDate;
        this.fnChangeDateToCurrentTimeZone = changeDateToCurrentTimeZone;
    }
    get fnCheckCorrectDate() {
        return this._fnCheckCorrectDate;
    }
    set fnCheckCorrectDate(value) {
        this._fnCheckCorrectDate = value;
    }
    get fnChangeDateToCurrentTimeZone() {
        return this._fnChangeDateToCurrentTimeZone;
    }
    set fnChangeDateToCurrentTimeZone(value) {
        this._fnChangeDateToCurrentTimeZone = value;
    }
    render() {
        try {
            // const stringDate = this.props.data;
            //     dateToString(this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data)), "MMM D, YYYY");
            return React.createElement(DateOnly, {date: dateToString(this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data)), "MMM D, YYYY")});
        }
        catch (ex) {
            if (ex.name === "DateParseException") {
                return React.createElement(Dash, null);
            }
            else {
                throw ex;
            }
        }
    }
}
