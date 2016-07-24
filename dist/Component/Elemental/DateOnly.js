"use strict";
var React = require("react");
exports.DateOnly = function (params) {
    return (React.createElement("span", {className: "date"}, params.date));
};
