import moment from "moment";
import {DateParseException} from "../../Exception/DateParseException";

export const checkCorrectDate = (date: any): Date => {
    if (date === null) {
        throw new DateParseException(`Error parsing Date`);
    }

    // пробуем один формат
    let correctDate = Date.parse(date);

    // пробуем другой формат
    if (isNaN(correctDate) === true) {
        let re = /-?\d+/;
        let m = re.exec(date);
        correctDate = parseInt(m[0]);
    }

    if (isNaN(correctDate) === false) {
        return moment(date).toDate();
    } else {
        throw new DateParseException(`Error parsing Date`);
    }
};

export interface IFnCheckCorrectDate {
    (date: any): Date;
}