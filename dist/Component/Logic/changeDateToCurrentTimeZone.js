"use strict";
var moment_1 = require("moment");
exports.changeDateToCurrentTimeZone = function (date) {
    var currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
    var dateInCurrentTimeZone = moment_1.default(date).add(-currentTimeZoneOffsetInHours, "hours");
    return dateInCurrentTimeZone;
};
