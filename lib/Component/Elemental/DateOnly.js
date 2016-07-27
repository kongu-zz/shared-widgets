"use strict";

exports.__esModule = true;
exports.DateOnly = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DateOnly = exports.DateOnly = function DateOnly(params) {
    return React.createElement("span", { className: "date" }, params.date);
};