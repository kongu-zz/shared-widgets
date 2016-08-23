import * as React from "react";

export const DateOnly = (params: { date: string; }) => {
    return (<span className="date">{params.date}</span>);
};