import moment from "moment";

export const changeDateToCurrentTimeZone = (date: Date): Date => {

    let currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
    let dateInCurrentTimeZone = moment(date).add(-currentTimeZoneOffsetInHours, "hours");
    return dateInCurrentTimeZone.toDate();
};

export interface IFnChangeDateToCurrentTimeZone {
    (date: Date): Date;
}