/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";

import * as Chai from "chai";
const expect = Chai.expect;
const use = Chai.use;
import chaiDateTime from "chai-datetime";
Chai.use(chaiDateTime);

import * as Sinon from "sinon";

import {checkCorrectDate} from "../../../src/Component/Logic/checkCorrectDate";
import moment from "moment";
import {DateParseException} from "../../../src/Exception/DateParseException";

describe("checkCorrectDate", () => {

    it("should check and convert to Date object from AspNet json serialization", () => {
        let aspNetJsonSerializationString = "/Date(1469681894130)/";
        let expectDate = new Date(2016, 6, 28, 7, 58, 14, 130);

        expect(checkCorrectDate(aspNetJsonSerializationString).getTime()).to.be.equal(expectDate.getTime());
    });

    it("should check and convert to Date object from string 2015-11-29T08:44:21.027", () => {
        let stringDateAndtime = "2015-11-29T08:44:21.027";
        let expectDate = new Date(2015, 10, 29, 8, 44, 21, 27);

        expect(checkCorrectDate(stringDateAndtime)).to.be.equalTime(expectDate);
    });

    it("should throw DateParseException for null", () => {

        expect(checkCorrectDate.bind(this, null)).to.throws(DateParseException);
    });

    it("should throw Error for null", () => {

        expect(checkCorrectDate.bind(this, null)).to.throws(Error);
    });

    it("should throw DateParseException for incorrect format 'ffffuuurr'", () => {

        expect(checkCorrectDate.bind(this, "ffffuuurr")).to.throws(DateParseException);
    });

    // it("should throw DateParseException for incorrect format '11122ffffuuurr'", () => {

    //     expect(checkCorrectDate.bind(this, "11122ffffuuurr")).to.throws(DateParseException);
    // });
});