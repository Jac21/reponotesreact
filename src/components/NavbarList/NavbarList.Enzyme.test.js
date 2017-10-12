/* eslint-disable */
import React from 'react';

import NavbarList from './NavbarList';

import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

const setup = function() {
  return shallow(<NavbarList />);
};

describe('<NavbarList />', () => {
  it('should render a parent <ul> element', () => {
    const wrapper = setup();
    expect(wrapper.find('ul'));
  });
});
