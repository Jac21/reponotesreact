import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

const styles = {
    swatch: {
        display: 'block',
        padding: 1 + 'em',
        fontSize: 1 + 'rem',
        color: '#fff'
    },
    error: {
        backgroundColor: '#d91e18'
    }
}

@Radium
class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                style={[
                    styles.swatch,
                    styles[this.props.kind]
                ]}>
                {this.props.message}
            </div>
        );
    }
}

Alert.propTypes = {
    kind: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
    message: PropTypes.string
}

export default Alert;