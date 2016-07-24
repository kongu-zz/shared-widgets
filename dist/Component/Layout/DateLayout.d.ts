import * as React from "react";
import { IFnChangeDateToCurrentTimeZone } from "../../Component/Logic/changeDateToCurrentTimeZone";
import { IFnCheckCorrectDate } from "../../Component/Logic/checkCorrectDate";
export interface IProps {
    data: any;
}
export interface IState {
}
export declare class DateLayout extends React.Component<IProps, IState> {
    private _fnCheckCorrectDate;
    private _fnChangeDateToCurrentTimeZone;
    constructor(props: IProps);
    fnCheckCorrectDate: IFnCheckCorrectDate;
    fnChangeDateToCurrentTimeZone: IFnChangeDateToCurrentTimeZone;
    render(): JSX.Element;
}
