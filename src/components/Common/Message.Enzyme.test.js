import React from "react";

import Message from "./Message";

import { shallow, mount, render } from "enzyme";
import TestUtils from "react-addons-test-utils";

var setup = function() {
  return shallow(<Message />);
};

describe("<Message />", () => {
  it("should render a parent <div> element", () => {
    const wrapper = setup();
    expect(wrapper.find("div"));
  });
});
