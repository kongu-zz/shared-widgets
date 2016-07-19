/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import {expect} from "chai";
import {Dash} from "../src/Dash";

import { shallow } from "enzyme";

describe("<Dash/>", () => {
  it("<Dash/> contains -", () => {
    const wrapper = shallow(<Dash/>);
    //wrapper.contains
    expect(wrapper.text()).is.equal("—");
  });
});