import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

const fadeInAndOut = css.keyframes('fadeInAndOut', {
  '0%': { opacity: '0' },
  '50%': { opacity: '1' },
  '100%': { opacity: '0' },
});

const check = css({
  stroke: '#0a0',
  verticalAlign: 'text-top',
});

const messageText = css({
  paddingLeft: '3px',
  display: 'inline',
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
        <span>
          <svg
            {...check}
            aria-hidden="true"
            height="14"
            version="1.1"
            viewBox="0 0 12 16"
            width="12"
          >
            <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
          </svg>
          <div {...messageText}>{this.props.text}</div>
        </span>
      </div>
    );
  }
}

Message.propTypes = {
  kind: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
  text: PropTypes.string,
};

export default Message;
