/// <reference path="../../../typings/index.d.ts" />
import * as React from "react";

import * as Chai from "chai";
const expect = Chai.expect;
const use = Chai.use;
import chaiDateTime from "chai-datetime";
Chai.use(chaiDateTime);

import * as Sinon from "sinon";

import {Dash} from "../../../src/Component/Elemental/Dash";
import {changeDateToCurrentTimeZone, IFnChangeDateToCurrentTimeZone} from "../../../src/Component/Logic/changeDateToCurrentTimeZone";

describe("changeDateToCurrentTimeZone", () => {
//   let viewModel: MoviesViewModel;
//   let movieDataServiceStub: Sinon.SinonSpy;
//   beforeEach(() => {
//     sinon.stub(movieDataService, 'loadMovies').returns([new Movie('The Matrix', 1998, 5)]);
//     movieDataServiceStub = sinon.spy(movieDataService, 'save');
//     viewModel = new MoviesViewModel();
//   });

//   afterEach(() => {
//     sinon.restore(movieDataService.loadMovies);
//     sinon.restore(movieDataService.save);
//   });_

    let now: Date = new Date();
    //let saveDefaultGetTimezoneOffset = Date.prototype.getTimezoneOffset;
    let year = 2014, month = 1, day = 1, hour = 12, min = 0, sec = 0;
    let utcTime = new Date(year, month, day, hour, min, sec);

    // let sandbox: Sinon.SinonSandbox;
    // let clock: Sinon.SinonFakeTimers;

    beforeEach(() => {
        //let saveDefaultGetTimezoneOffset = Date.prototype.getTimezoneOffset;
    });

    afterEach(() => {
         //Date.prototype.getTimezoneOffset = saveDefaultGetTimezoneOffset;
    });

    it("should change date -3(-180 min) hours", () => {
        let timeZoneShift = -3;
        let saveDefaultGetTimezoneOffset = Date.prototype.getTimezoneOffset;
        Date.prototype.getTimezoneOffset = function () {
            return 60 * timeZoneShift;
        };
        let moscowTime = new Date(year, month, day, hour + timeZoneShift, min, sec);

        expect(changeDateToCurrentTimeZone(moscowTime)).to.be.equalTime(utcTime);
        Date.prototype.getTimezoneOffset = saveDefaultGetTimezoneOffset;
    });

    it("should change date -2(-120 min) hours", () => {
        let timeZoneShift = -2;
        Date.prototype.getTimezoneOffset = function () {
            return 60 * timeZoneShift;
        };
        let kievTime = new Date(year, month, day, hour + timeZoneShift, min, sec);

        expect(changeDateToCurrentTimeZone(kievTime)).to.be.equalTime(utcTime);
    });

    // const changeTimezone = (timeZoneShift: number) => {
    //     Date.prototype.getTimezoneOffset = function () {
    //         return 60 * timeZoneShift;
    //     };
    // };

//   it('should be able to select a movie', () => {
//     viewModel.select(viewModel.movies[0]);
//     expect(viewModel.selectedMovie).to.be.equal(viewModel.movies[0]);
//   });

//   it('should save rated movie', () => {
//     viewModel.select(viewModel.movies[0]);
//     viewModel.rate(4);
//     expect(movieDataServiceStub.called).to.be.true;
//   });

});