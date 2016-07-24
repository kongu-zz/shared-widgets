"use strict";
var React = require("react");
var objectAssign = require("object-assign");
exports.theWrapper = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    return function HOCFactory(WrappedComponent) {
        return (function (_super) {
            __extends(Pony, _super);
            function Pony(props) {
                _super.call(this, props);
            }
            Pony.prototype.render = function () {
                //objectAssign
                var newProps = objectAssign({}, this.props);
                return React.createElement(WrappedComponent, __assign({}, newProps));
            };
            return Pony;
        }(React.Component));
    };
};
