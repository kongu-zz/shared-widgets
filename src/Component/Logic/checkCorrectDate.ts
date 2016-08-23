import moment from "moment";
import {DateParseException} from "../../Exception/DateParseException";

export const checkCorrectDate = (date: any): Date => {
    if (date === null) {
        throw new DateParseException(`Error parsing Date`);
    }

    let correctDate: number;
    // пробуем один формат
    try {
        correctDate = Date.parse(date);
    } catch (ex) {
        throw new DateParseException(`Error parsing Date`);
    }

    // пробуем другой формат
    if (isNaN(correctDate) === true) {
        try {
            let re = /-?\d+/;
            let m = re.exec(date);
            correctDate = parseInt(m[0]);
        } catch (ex) {
            throw new DateParseException(`Error parsing Date`);
        }
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