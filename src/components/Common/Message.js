import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

const fadeInAndOut = css.keyframes('fadeInAndOut', {
  '0%': { opacity: '0' },
  '50%': { opacity: '1' },
  '100%': { opacity: '0' },
});

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="form-message success"
        {...css({
          animation: `${fadeInAndOut} 3s ease 0s infinite`,
        })}
      >
        {this.props.text}
      </div>
    );
  }
}

Message.propTypes = {
  kind: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
  text: PropTypes.string,
};

export default Message;
