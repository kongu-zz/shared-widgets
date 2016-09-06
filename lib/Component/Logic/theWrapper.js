"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.theWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var objectAssign = require("object-assign");
var theWrapper = exports.theWrapper = function theWrapper() {
    return function HOCFactory(WrappedComponent) {
        return function (_React$Component) {
            _inherits(Pony, _React$Component);

            function Pony(props) {
                _classCallCheck(this, Pony);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(Pony).call(this, props));
            }

            _createClass(Pony, [{
                key: "render",
                value: function render() {
                    // objectAssign
                    var newProps = objectAssign({}, this.props);
                    // let newProps = (...this.props);
                    return React.createElement(WrappedComponent, __assign({}, newProps));
                }
            }]);

            return Pony;
        }(React.Component);
    };
};