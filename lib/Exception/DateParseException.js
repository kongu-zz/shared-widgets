"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DateParseException = exports.DateParseException = function (error) {
    function DateParseException(message) {
        this.message = message;
        this.name = "DateParseException";
    }
    DateParseException.prototype = new Error();
    DateParseException.prototype.name = DateParseException.name;
    DateParseException.prototype.constructor = DateParseException;
    return DateParseException;
}(Error);