import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
    },
    exportNotesButton: {
        position: 'absolute',
        bottom: 0,
        width: 100 + '%',
    }
};

class Navbar extends Component {
    state = {
        disabled: true
    };

    render() {
        // const { classes } = this.props;

        return (
            <aside style={styles.sidebar}>
                <form id="search-container" className="search">
                    <input id="search-input" className="search-input" type="search" placeholder="GitHub Username" />
                    <ul id="search-results" className="search-results"></ul>
                </form>
                <nav className="navigation">
                    <NavbarList />
                </nav>
                <button className="button" disabled={this.state.disabled}
                    style={styles.exportNotesButton}>Export Notes</button>
            </aside>
        );
    }
}

export default Navbar;