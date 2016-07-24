"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
