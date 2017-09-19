import React from 'react';

import ErrorAlert from './ErrorAlert';

import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

var setup = function () {
    return shallow(<ErrorAlert />);
};

describe('<ErrorAlert />', () => {
    it('should render a parent <div> element', () => {
        const wrapper = setup();
        expect(wrapper.find('div'));
    });
});