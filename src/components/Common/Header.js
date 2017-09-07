import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

const styles = {
    headerTitle: {
        color: 'white'
    }
};

class Header extends Component {
    render() {
        // const { classes } = this.props;

        return (
            <header className="header background-primary">
                <h1 style={styles.headerTitle}>RepoNotes</h1>
            </header>
        );
    }
}

export default Header;