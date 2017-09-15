import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        return (
            <aside style={styles.sidebar}>
                <form id="search-container" className="search">
                    <input id="search-input" className="search-input"
                        type="search" placeholder="Repository" />
                    <ul id="search-results" className="search-results"></ul>
                </form>
                <nav className="navigation">
                    <ul>
                        {
                            this.props.repositories &&
                            this.props.repositories.map(item =>
                                <NavbarList key={item.id}
                                    repoName={item.name} repoLink={item.html_url} />)
                        }
                    </ul>
                </nav>
                <button className="button" disabled={this.state.disabled}
                    style={styles.exportNotesButton}>Export Notes</button>
            </aside>
        );
    }
}

Navbar.propTypes = {
    repositories: PropTypes.array
}

export default Navbar;