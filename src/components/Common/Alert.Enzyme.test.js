import React from 'react';

import Alert from './Alert';

import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

var setup = function () {
    return shallow(<Alert />);
};

describe('<Alert />', () => {
    it('should render a parent <div> element', () => {
        const wrapper = setup();
        expect(wrapper.find('div'));
    });
});