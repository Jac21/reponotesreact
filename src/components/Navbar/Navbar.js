import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({});

class Navbar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <h1>Navbar</h1>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default Navbar;