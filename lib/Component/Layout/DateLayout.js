"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _changeDateToCurrentTimeZone = require("../../Component/Logic/changeDateToCurrentTimeZone");

var _checkCorrectDate = require("../../Component/Logic/checkCorrectDate");

var _dateTimeFormats = require("../../Component/Logic/dateTimeFormats");

var _Dash = require("../../Component/Elemental/Dash");

var _DateOnly = require("../../Component/Elemental/DateOnly");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateLayout = exports.DateLayout = function (_React$Component) {
    _inherits(DateLayout, _React$Component);

    function DateLayout(props) {
        _classCallCheck(this, DateLayout);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateLayout).call(this, props));

        _this.fnCheckCorrectDate = _checkCorrectDate.checkCorrectDate;
        _this.fnChangeDateToCurrentTimeZone = _changeDateToCurrentTimeZone.changeDateToCurrentTimeZone;
        return _this;
    }

    _createClass(DateLayout, [{
        key: "render",
        value: function render() {
            try {
                // const stringDate = this.props.data;
                //     dateToString(this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data)), "MMM D, YYYY");
                return React.createElement(_DateOnly.DateOnly, { date: (0, _dateTimeFormats.dateToString)(this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data)), "MMM D, YYYY") });
            } catch (ex) {
                if (ex.name === "DateParseException") {
                    return React.createElement(_Dash.Dash, null);
                } else {
                    throw ex;
                }
            }
        }
    }, {
        key: "fnCheckCorrectDate",
        get: function get() {
            return this._fnCheckCorrectDate;
        },
        set: function set(value) {
            this._fnCheckCorrectDate = value;
        }
    }, {
        key: "fnChangeDateToCurrentTimeZone",
        get: function get() {
            return this._fnChangeDateToCurrentTimeZone;
        },
        set: function set(value) {
            this._fnChangeDateToCurrentTimeZone = value;
        }
    }]);

    return DateLayout;
}(React.Component);