import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({});

class NavbarList extends Component {
    render() {
        const { classes } = this.props;

        return (
            <h1>NavbarList</h1>
        );
    }
}

NavbarList.propTypes = {
    classes: PropTypes.object.isRequired
}

export default NavbarList;