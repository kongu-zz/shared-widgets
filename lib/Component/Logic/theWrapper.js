"use strict";

exports.__esModule = true;
exports.theWrapper = undefined;

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

                return _possibleConstructorReturn(this, _React$Component.call(this, props));
            }

            Pony.prototype.render = function render() {
                // objectAssign
                var newProps = objectAssign({}, this.props);
                // let newProps = (...this.props);
                return React.createElement(WrappedComponent, __assign({}, newProps));
            };

            return Pony;
        }(React.Component);
    };
};