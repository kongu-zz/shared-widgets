/// <reference path="../../typings/index.d.ts" />
import * as React from "react";

import * as Chai from "chai";
const expect = Chai.expect;
const use = Chai.use;
import chaiDateTime from "chai-datetime";
Chai.use(chaiDateTime);

import * as Sinon from "sinon";

import {DateParseException} from "../../src/Exception/DateParseException";

describe("DateParseException", () => {

    it("should throw DateParseException", () => {
        let err = new DateParseException("Date Parse Exception");

        let fn = function () { throw err; };

        expect(fn).to.throw(DateParseException);
    });
});