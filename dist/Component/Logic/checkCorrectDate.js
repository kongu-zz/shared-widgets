"use strict";
var moment_1 = require("moment");
var DateParseException_1 = require("../../Exception/DateParseException");
exports.checkCorrectDate = function (date) {
    // пробуем один формат
    var correctDate = Date.parse(date);
    // пробуем другой формат
    if (isNaN(correctDate) === true) {
        var re = /-?\d+/;
        var m = re.exec(date);
        correctDate = parseInt(m[0]);
    }
    if (isNaN(correctDate) === false) {
        return moment_1.default(date).toDate();
    }
    else {
        throw new DateParseException_1.DateParseException("Error parsing Date");
    }
};
