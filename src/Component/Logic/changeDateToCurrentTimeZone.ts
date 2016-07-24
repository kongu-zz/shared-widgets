import moment from "moment";

export const changeDateToCurrentTimeZone = (date: Date): moment.Moment => {
    let currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
    let dateInCurrentTimeZone = moment(date).add(-currentTimeZoneOffsetInHours, "hours");
    return dateInCurrentTimeZone;
};

export interface IFnChangeDateToCurrentTimeZone {
    (date: Date): moment.Moment;
}