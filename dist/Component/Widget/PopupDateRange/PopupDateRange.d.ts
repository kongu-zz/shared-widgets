import * as React from "react";
export interface IProps {
    value?: string;
    onChange?: (value: any) => void;
    isInline?: boolean;
    onDateSelected?: (value: any) => void;
}
export interface IState {
    opened?: boolean;
    selectedValue?: string;
}
export declare const PopupDateRange: React.Component<IProps, IState>;
