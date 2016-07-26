import moment from "moment";

export const dateToString = (date: Date, format: string): string => {
    return moment(date).format(format);
};