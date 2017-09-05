import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({});

class Header extends Component {
    render() {
        const { classes } = this.props;

        return (
            <h1>RepoNotes</h1>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Header;