"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeDateToCurrentTimeZone = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeDateToCurrentTimeZone = exports.changeDateToCurrentTimeZone = function changeDateToCurrentTimeZone(date) {
    var currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
    var dateInCurrentTimeZone = (0, _moment2.default)(date).add(-currentTimeZoneOffsetInHours, "hours");
    return dateInCurrentTimeZone.toDate();
};