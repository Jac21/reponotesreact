import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
class NavbarList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <li style={styles.repoListItem}>
                <a href={this.props.repoLink} target="_blank" rel="noopener noreferrer"
                    style={styles.repoListLink}>{this.props.repoName}</a>
            </li>
        );
    }
}

NavbarList.propTypes = {
    repoListLink: PropTypes.string,
    repoName: PropTypes.string
}

export default NavbarList;