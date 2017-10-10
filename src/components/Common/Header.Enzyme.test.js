import React from "react";

import Header from "./Header";

import { shallow, mount, render } from "enzyme";
import TestUtils from "react-addons-test-utils";

var setup = function() {
  return shallow(<Header />);
};

describe("<Header />", () => {
  it("should render a single <header> element", () => {
    const wrapper = setup();
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should render a single <h1> element", () => {
    const wrapper = setup();
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("should contain a title of RepoNotes within the <h1> element", () => {
    const wrapper = setup();
    expect(wrapper.find("h1").text()).toEqual("RepoNotes");
  });
});
