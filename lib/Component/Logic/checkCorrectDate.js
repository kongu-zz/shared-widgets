"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkCorrectDate = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _DateParseException = require("../../Exception/DateParseException");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkCorrectDate = exports.checkCorrectDate = function checkCorrectDate(date) {
    if (date === null) {
        throw new _DateParseException.DateParseException("Error parsing Date");
    }
    var correctDate = void 0;
    // пробуем один формат
    try {
        correctDate = Date.parse(date);
    } catch (ex) {
        throw new _DateParseException.DateParseException("Error parsing Date");
    }
    // пробуем другой формат
    if (isNaN(correctDate) === true) {
        try {
            var re = /-?\d+/;
            var m = re.exec(date);
            correctDate = parseInt(m[0]);
        } catch (ex) {
            throw new _DateParseException.DateParseException("Error parsing Date");
        }
    }
    if (isNaN(correctDate) === false) {
        return (0, _moment2.default)(date).toDate();
    } else {
        throw new _DateParseException.DateParseException("Error parsing Date");
    }
};