"use strict";
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
