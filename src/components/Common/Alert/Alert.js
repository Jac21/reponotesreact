import React from 'react';
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

const Alert = ({ message }) => {
  return (
    <React.Fragment>
      <div {...css(swatch, error)}> {message} </div>
    </React.Fragment>
  );
};

Alert.propTypes = {
  kind: PropTypes.oneOf(['primary', 'warning', 'error']).isRequired,
  message: PropTypes.string
};

export default React.memo(Alert);
