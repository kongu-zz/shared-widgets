"use strict";
var React = require("react");
var changeDateToCurrentTimeZone_1 = require("../../Component/Logic/changeDateToCurrentTimeZone");
var checkCorrectDate_1 = require("../../Component/Logic/checkCorrectDate");
var DateParseException_1 = require("../../Exception/DateParseException");
var Dash_1 = require("../../Component/Elemental/Dash");
var DateOnly_1 = require("../../Component/Elemental/DateOnly");
var DateLayout = (function (_super) {
    __extends(DateLayout, _super);
    function DateLayout(props) {
        _super.call(this, props);
        this.fnCheckCorrectDate = checkCorrectDate_1.checkCorrectDate;
        this.fnChangeDateToCurrentTimeZone = changeDateToCurrentTimeZone_1.changeDateToCurrentTimeZone;
    }
    Object.defineProperty(DateLayout.prototype, "fnCheckCorrectDate", {
        get: function () {
            return this._fnCheckCorrectDate;
        },
        set: function (value) {
            this._fnCheckCorrectDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateLayout.prototype, "fnChangeDateToCurrentTimeZone", {
        get: function () {
            return this._fnChangeDateToCurrentTimeZone;
        },
        set: function (value) {
            this._fnChangeDateToCurrentTimeZone = value;
        },
        enumerable: true,
        configurable: true
    });
    DateLayout.prototype.render = function () {
        try {
            var stringDate = this.props.data;
            this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data))
                .format("MMM D, YYYY");
            // let WrappedDateOnly = theWrapper(null)(DateOnly);
            return React.createElement(DateOnly_1.DateOnly, {date: stringDate});
        }
        catch (ex) {
            if (ex instanceof DateParseException_1.DateParseException) {
                return React.createElement(Dash_1.Dash, null);
            }
            else {
                throw ex;
            }
        }
    };
    return DateLayout;
}(React.Component));
exports.DateLayout = DateLayout;
