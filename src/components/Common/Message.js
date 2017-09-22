import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

const fadeInAndOutframes = Radium.keyframes({
    '0%': { opacity: '0' },
    '50%': { opacity: '1' },
    '100%': { opacity: '0' }
}, 'fadeInAndOut');

const styles = {
    transition: {
        // Use a placeholder animation name in `animation`
        animation: 'x 3s ease 0s infinite',
        // Assign the result of `keyframes` to `animationName`
        animationName: fadeInAndOutframes
    }
}

@Radium
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.transition} className="form-message success">
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