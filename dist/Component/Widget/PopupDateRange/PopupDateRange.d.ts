export interface IProps {
    value?: string;
    onChange?: (value: any) => void;
    isInline?: boolean;
}
export interface IState {
    opened?: boolean;
    selectedValue?: string;
}
export declare const PopupDateRange: any;
