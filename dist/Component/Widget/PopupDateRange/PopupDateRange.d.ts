import { IDateRange } from "./IDateRange";
export interface IProps {
    value?: string;
    onChange?: (value: any) => void;
    isInline?: boolean;
    onDateSelected?: (dateRange: IDateRange) => void;
}
export interface IState {
    opened?: boolean;
    selectedValue?: string;
}
export declare const PopupDateRange: any;
