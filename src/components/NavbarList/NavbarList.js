import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';
import scrollToElement from 'scroll-to-element';

const repoListItem = css({
  margin: 0,
  padding: 0,
  fontWeight: 500,
  fontSize: `${1}rem`,
  lineHeight: 1.35
});

const repoListLink = css({
  display: 'block',
  padding: '.5em 1em',
  textDecoration: 'none'
});

const repoListLinkText = css({
  cursor: 'pointer'
});

// Singular list component for Navbar, contains list of repositories for current user
class NavbarList extends Component {
  constructor(props) {
    super(props);
    this.listItemLinkRef = React.createRef();
    this.state = {
      note:
        localStorage.getItem(
          this.props.username.toLocaleLowerCase() + this.props.repositoryName
        ) || ''
    };
  }

  // Change styling of list item link if note exists for that particular repo
  componentDidMount() {
    if (this.state.note !== '') {
      this.listItemLinkRef.current.style.color = '#474744';
      this.listItemLinkRef.current.style.backgroundColor = '#FFB400';
    }
  }

  render() {
    return (
      <li {...repoListItem}>
        <a
          ref={this.listItemLinkRef}
          onClick={() =>
            scrollToElement(`#${this.props.repositoryName}Field`, {
              offset: 0,
              duration: 500
            })}
          {...repoListLink}
        >
          <span {...repoListLinkText}>{this.props.repositoryName}</span>
        </a>
      </li>
    );
  }
}

NavbarList.propTypes = {
  username: PropTypes.string,
  repositoryLink: PropTypes.string,
  repositoryName: PropTypes.string
};

export default NavbarList;
