import React from 'react';

import RepoNote from './RepoNote';

import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

var setup = function() {
    return shallow(<RepoNote />);
};

describe('<RepoNote />', () => {
    it('should render a parent <div> element', () => {
        const wrapper = setup();
        expect(wrapper.find('div'));
    });
});