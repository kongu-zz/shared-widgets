import moment from "moment";
export const changeDateToCurrentTimeZone = (date) => {
    let currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
    let dateInCurrentTimeZone = moment(date).add(-currentTimeZoneOffsetInHours, "hours");
    return dateInCurrentTimeZone.toDate();
};
