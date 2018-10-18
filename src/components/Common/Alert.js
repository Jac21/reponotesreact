import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

const swatch = css({
  display: 'block',
  padding: `${1}em`,
  fontSize: `${1}rem`,
  color: '#fff'
});

const error = css({
  backgroundColor: '#d91e18'
});

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div {...css(swatch, error)}>{this.props.message}</div>
      </React.Fragment>
    );
  }
}

Alert.propTypes = {
  kind: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
  message: PropTypes.string
};

export default Alert;
