import React from "react";

import Navbar from "./Navbar";

import { shallow, mount, render } from "enzyme";
import TestUtils from "react-addons-test-utils";

var setup = function() {
  return shallow(<Navbar />);
};

describe("<Navbar />", () => {
  it("should render a single <aside> element", () => {
    const wrapper = setup();
    expect(wrapper.find("aside").length).toBe(1);
  });

  it("should contain a single NavbarList component within an <ul>, as well as search results", () => {
    const wrapper = setup();
    expect(wrapper.find("ul").length).toBe(2);
  });
});
