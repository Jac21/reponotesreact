import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

@Radium
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="form-message success">
                {this.props.text}
            </div>
        );
    }
}

Message.propTypes = {
    kind: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
    text: PropTypes.string
}

export default Message;