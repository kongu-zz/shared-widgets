"use strict";
var React = require("react");
exports.OnlyDate = function (params) {
    return (React.createElement("span", {className: "date"}, params.date));
};
