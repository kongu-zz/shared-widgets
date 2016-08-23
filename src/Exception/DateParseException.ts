
export const DateParseException = (function (error: ErrorConstructor): any {
    function DateParseException(message: string) {
        this.message = message;
        this.name = "DateParseException";
    }
    DateParseException.prototype = new Error();
    DateParseException.prototype.name = DateParseException.name;
    DateParseException.prototype.constructor = DateParseException;
    return DateParseException;
})(Error);


