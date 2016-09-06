"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dateToString = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateToString = exports.dateToString = function dateToString(date, format) {
    return (0, _moment2.default)(date).format(format);
};