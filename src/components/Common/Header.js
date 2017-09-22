import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

const styles = {
    headerTitle: {
        color: '#474744',
        paddingLeft: 7 + 'px'
    }
};

@Radium
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header background-reponotes padding-vertical-xl">
                <h1 style={styles.headerTitle}>
                    RepoNotes
                    {this.props.username &&
                        ` for ${this.props.username}`}
                </h1>
            </header>
        );
    }
}

Header.propTypes = {
    username: PropTypes.string
}

export default Header;