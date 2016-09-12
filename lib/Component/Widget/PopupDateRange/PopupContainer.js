"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactWidgets = require("react-widgets");

var reactWidgets = _interopRequireWildcard(_reactWidgets);

require("react-widgets/lib/less/react-widgets.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = reactWidgets.Calendar;

var moment = require("moment");
var momentLocalizer = require("react-widgets/lib/localizers/moment");
momentLocalizer(moment);

var PopupContainer = function (_React$Component) {
    _inherits(PopupContainer, _React$Component);

    function PopupContainer(props) {
        _classCallCheck(this, PopupContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopupContainer).call(this, props));

        _this.fromChange = function (date) {
            _this.setState({
                from: date
            });
            var returnedState = {
                from: date,
                to: _this.state.to
            };
            if (_this.props.onChange) {
                _this.props.onChange(returnedState);
            }
        };
        _this.toChange = function (date) {
            _this.setState({
                to: date
            });
            var returnedState = {
                from: _this.state.from,
                to: date
            };
            if (_this.props.onChange) {
                _this.props.onChange(returnedState, true);
            }
        };
        _this.state = _this.parseValue(_this.props.value);
        return _this;
    }

    _createClass(PopupContainer, [{
        key: "parseValue",
        value: function parseValue(value) {
            if (value) {
                var splited = value.split("-");
                if (splited.length > 1) {
                    return {
                        from: moment(splited[0], "MM.DD.YYYY").toDate(),
                        to: moment(splited[1], "MM.DD.YYYY").toDate()
                    };
                }
            }
            return {
                from: new Date(),
                to: new Date()
            };
        }
    }, {
        key: "render",
        value: function render() {
            var style = { width: "578px", height: "348px", position: "relative", backgroundColor: "#fff", border: "solid 1px #ddd" };
            if (this.props.isInline) {
                style.float = "right";
            }
            return React.createElement("div", null, React.createElement("div", { style: style }, React.createElement("div", { style: { width: "578px", position: "absolute" } }, React.createElement("div", { style: { float: "left", width: "259px", margin: "20px 20px 20px 20px" } }, React.createElement(Calendar, { defaultValue: this.state.from, onChange: this.fromChange })), React.createElement("div", { style: { float: "left", width: "259px", margin: "20px 20px 20px 0" } }, React.createElement(Calendar, { defaultValue: this.state.to, onChange: this.toChange })))));
        }
    }]);

    return PopupContainer;
}(React.Component);

exports.default = PopupContainer;

;