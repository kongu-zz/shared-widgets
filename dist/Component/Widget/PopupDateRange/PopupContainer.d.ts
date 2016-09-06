import * as React from "react";
import "react-widgets/lib/less/react-widgets.less";
import { IDateRange } from "./IDateRange";
export interface IProps {
    value?: string;
    onChange?: (dateRange: IDateRange, isHide?: boolean) => void;
}
export interface IState {
    from?: Date;
    to?: Date;
}
export default class PopupContainer extends React.Component<IProps, IState> {
    constructor(props: IProps);
    private parseValue(value?);
    private fromChange;
    private toChange;
    render(): JSX.Element;
}
