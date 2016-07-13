import * as React from "react";

export interface IParams { date: any; }

export const OnlyDate = (params: IParams) => {
    return (<span className="date">{params.date}</span>);
}