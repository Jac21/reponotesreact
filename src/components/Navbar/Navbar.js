import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import NavbarList from '../NavbarList/NavbarList';

const styles = {
    sidebar: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: 240 + 'px',
        height: 100 + '%',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: 'white',
    }
};

class Navbar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <aside style={styles.sidebar}>
                <form id="search-container" className="search">
                    <input id="search-input" className="search-input" type="search" placeholder="GitHub Username" />
                    <ul id="search-results" className="search-results"></ul>
                </form>
                <nav className="navigation">
                    <NavbarList />
                </nav>
            </aside>
        );
    }
}

export default Navbar;