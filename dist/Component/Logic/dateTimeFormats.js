import moment from "moment";
export const dateToString = (date, format) => {
    return moment(date).format(format);
};
