import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

import NavbarList from '../NavbarList/NavbarList';

const styles = {
    sidebar: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: 260 + 'px',
        height: 100 + '%',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: 'white',
        borderRight: 1 + 'px solid #e5e5e8'
    },
    exportNotesButton: {
        position: 'absolute',
        bottom: 0,
        width: 100 + '%',
    }
};

@Radium
// Parent Navbar component
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
    }

    render() {
        return (
            <aside className="sidebar" style={styles.sidebar}>
                <form id="search-container" className="search">
                    <input id="search-input" className="search-input"
                        type="search" placeholder="Repository name..." />
                    <ul id="search-results" className="search-results"></ul>
                </form>
                <nav className="navigation">
                    <ul>
                        {
                            this.props.repositories &&
                            this.props.repositories.map(item =>
                                <NavbarList key={item.id}
                                    repositoryName={item.name} repositoryLink={item.html_url} />)
                        }
                    </ul>
                </nav>
                {/* <button className="button" disabled={this.state.disabled}
                    style={styles.exportNotesButton}>Export Notes</button> */}
            </aside>
        );
    }
}

Navbar.propTypes = {
    repositories: PropTypes.array
}

export default Navbar;