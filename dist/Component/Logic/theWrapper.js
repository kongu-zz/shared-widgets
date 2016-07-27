import * as React from "react";
const objectAssign = require("object-assign");
export const theWrapper = (...params) => {
    return function HOCFactory(WrappedComponent) {
        return class Pony extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                // objectAssign
                let newProps = objectAssign({}, this.props);
                // let newProps = (...this.props);
                return React.createElement(WrappedComponent, __assign({}, newProps));
            }
        }
        ;
    };
};
