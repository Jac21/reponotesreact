import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

const header = css({
  backgroundColor: '#FFB400'
});

const headerWrapper = css({
  paddingLeft: 'calc(1rem + .5vw)',
  paddingRight: 'calc(1rem + .5vw)'
});

const headerText = css({
  fontSize: '2.5rem',
  color: '#474744'
});

const subHeaderText = css({
  fontSize: '1.2rem',
  marginTop: '-1em'
});

const headerLink = css({
  textDecoration: 'none'
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header padding-vertical-xl" {...header}>
        <div {...headerWrapper}>
          <h1 {...headerText}>
            <a href="https://www.reponotes.com" {...headerLink}>
              RepoNotes
            </a>
            <span>{this.props.username && ` for ${this.props.username}`}</span>
          </h1>
          <p {...css(headerText, subHeaderText)}>
            Offline-capable, locally-persisted ideation assister for your GitHub repositories
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  username: PropTypes.string
};

export default Header;
