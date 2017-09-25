import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';
import scrollToElement from 'scroll-to-element';

const styles = {
    repoListItem: {
        margin: 0,
        padding: 0,
        fontWeight: 500,
        fontSize: 1 + 'rem',
        lineHeight: 1.35,
    },
    repoListLink: {
        display: 'block',
        padding: '.5em 1em',
        textDecoration: 'none',
    }
}

// Singular list component for Navbar, contains list of repositories for current user
@Radium
class NavbarList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li style={styles.repoListItem}>
                <a onClick={() => scrollToElement(`#${this.props.repositoryName}Field`, {
                    offset: 0,
                    duration: 500
                })}
                    style={styles.repoListLink}>{this.props.repositoryName}</a>
            </li >
        );
    }
}

NavbarList.propTypes = {
    repositoryLink: PropTypes.string,
    repositoryName: PropTypes.string
}

export default NavbarList;