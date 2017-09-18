import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const styles = {
    headerTitle: {
        color: 'white'
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header background-primary">
                <h1 style={styles.headerTitle}>RepoNotes</h1>
            </header>
        );
    }
}

export default Header;