"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupDateRange = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _PopupContainer = require("./PopupContainer");

var _PopupContainer2 = _interopRequireDefault(_PopupContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = require("moment");
var enhanceWithClickOutside = require("react-click-outside");

var PopupDateRangeInner = function (_React$Component) {
    _inherits(PopupDateRangeInner, _React$Component);

    function PopupDateRangeInner(props) {
        _classCallCheck(this, PopupDateRangeInner);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopupDateRangeInner).call(this, props));

        _this.show = function (event) {
            event.preventDefault();
            _this.setState({ opened: !_this.state.opened });
        };
        _this.hide = function (vent) {
            _this.setState({ opened: false });
        };
        _this.handleClickOutside = function () {
            _this.setState({ opened: false });
        };
        _this.onChange = function (dateRange, isHide) {
            var from = moment(dateRange.from).format("MM.DD.YYYY");
            var to = moment(dateRange.to).format("MM.DD.YYYY");
            if (_this.props.onChange) {
                _this.props.onChange(from + "-" + to);
            }
            _this.setState({ selectedValue: from + "-" + to, opened: !isHide });
            if (isHide && _this.props.onDateSelected) {
                _this.props.onDateSelected(dateRange);
            }
        };
        _this.inputOnChange = function (event) {
            _this.setState({ selectedValue: event.target.value });
            if (_this.props.onChange) {
                _this.props.onChange(event.target.value);
            }
        };
        _this.componentWillReceiveProps = function (nextProps) {
            if (_this.props.value !== nextProps.value) {
                _this.setState({ selectedValue: nextProps.value });
            }
        };
        _this.state = {
            opened: false,
            selectedValue: _this.props.value
        };
        return _this;
    }

    _createClass(PopupDateRangeInner, [{
        key: "render",
        value: function render() {
            var userInfoPopup = null;
            if (this.state.opened) {
                userInfoPopup = React.createElement(_PopupContainer2.default, { value: this.state.selectedValue, onChange: this.onChange, isInline: this.props.isInline });
            }
            var style = {};
            if (this.props.isInline) {
                style = { display: "inline-block" };
            }
            return React.createElement("div", { className: "dropdown-container" + (this.state.opened ? " show" : ""), style: style }, React.createElement("div", { className: "form-group form-date" }, React.createElement("input", { type: "text", className: "form-input", ref: "container", value: this.state.selectedValue, onChange: this.inputOnChange }), React.createElement("button", { onClick: this.show, className: "form-date-picker btn-clear b-icon icon-date-pick" })), React.createElement("div", { className: "dropdown-list", ref: "dropdown-list" }, React.createElement("div", null, userInfoPopup)));
        }
    }]);

    return PopupDateRangeInner;
}(React.Component);

var PopupDateRange = exports.PopupDateRange = enhanceWithClickOutside(PopupDateRangeInner);