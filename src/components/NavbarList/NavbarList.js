import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';
import scrollToElement from 'scroll-to-element';

let repoListItem = css({
    margin: 0,
    padding: 0,
    fontWeight: 500,
    fontSize: 1 + 'rem',
    lineHeight: 1.35,
});

let repoListLink = css({
    display: 'block',
    padding: '.5em 1em',
    textDecoration: 'none',
});

// Singular list component for Navbar, contains list of repositories for current user
class NavbarList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li {...repoListItem}>
                <a onClick={() => scrollToElement(`#${this.props.repositoryName}Field`, {
                    offset: 0,
                    duration: 500
                })}
                    {...repoListLink}>{this.props.repositoryName}</a>
            </li >
        );
    }
}

NavbarList.propTypes = {
    repositoryLink: PropTypes.string,
    repositoryName: PropTypes.string
}

export default NavbarList;