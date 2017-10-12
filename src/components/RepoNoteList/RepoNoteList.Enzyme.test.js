/* eslint-disable */
import React from 'react';

import RepoNoteList from './RepoNoteList';

import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

const setup = function() {
  return shallow(<RepoNoteList />);
};

describe('<RepoNoteList />', () => {
  it('should render a parent <div> element', () => {
    const wrapper = setup();
    expect(wrapper.find('div'));
  });

  it('should render a single header <h2> element', () => {
    const wrapper = setup();
    expect(wrapper.find('h2').length).toBe(1);
  });
});
