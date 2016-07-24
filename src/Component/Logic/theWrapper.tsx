
import * as React from "react";
import { Component } from "react";
const objectAssign = require("object-assign");

export interface IProps { data: any; }

export interface IState { }

export const theWrapper = (...params: any[]): any => {
    return function HOCFactory(WrappedComponent: any) {
        return class Pony extends React.Component<IProps, IState> {
            constructor(props: IProps) {
                super(props);
            }

            render() {
                //objectAssign
                let newProps = objectAssign({}, this.props);


                return <WrappedComponent {...newProps}/>;
            }
        };
    };
};