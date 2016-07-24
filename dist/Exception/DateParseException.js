"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DateParseException = (function (_super) {
    __extends(DateParseException, _super);
    function DateParseException(message) {
        _super.call(this, message);
        this.message = message;
        this.name = "HubDisconnectedException";
        this.stack = new Error().stack;
    }
    return DateParseException;
}(Error));
exports.DateParseException = DateParseException;
