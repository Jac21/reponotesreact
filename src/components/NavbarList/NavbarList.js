import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

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

class NavbarList extends Component {
    render() {
        const { classes } = this.props;

        return (

            <ul>
                <li style={styles.repoListItem}>
                    <a href="/" style={styles.repoListLink}>Repository One</a>
                </li>
                <li style={styles.repoListItem}>
                    <a href="/" style={styles.repoListLink}>Repository Two</a>
                </li>
                <li style={styles.repoListItem}>
                    <a href="/" style={styles.repoListLink}>Repository Three</a>
                </li>
            </ul>
        );
    }
}

export default NavbarList;