import React from 'react';

import Navbar from './Navbar';

import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

var setup = function() {
    return shallow(<Navbar />);
};

describe('<Navbar />', () => {
    it('should render a single <aside> element', () => {
        const wrapper = setup();
        expect(wrapper.find('aside').length).toBe(1);
    });

    it('should contain a single NavbarList component', () => {
        const wrapper = setup();
        expect(wrapper.find('NavbarList').length).toBe(1);
    });
});