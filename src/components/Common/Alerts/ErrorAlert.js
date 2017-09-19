import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="swatch color-white background-error">{this.props.message}</div>
        );
    }
}

ErrorAlert.propTypes = {
    message: PropTypes.string
}

export default ErrorAlert;