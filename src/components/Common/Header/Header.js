import React from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

const header = css({
  backgroundColor: '#FFB400'
});

const headerWrapper = css({
  paddingLeft: 'calc(1rem + .5vw)',
  paddingRight: 'calc(1rem + .5vw)'
});

const headerText = css({
  fontSize: '2.5rem',
  color: '#474744'
});

const subHeaderText = css({
  fontSize: '1.2rem',
  marginTop: '-1em'
});

const headerLink = css({
  textDecoration: 'none'
});

// https://javascriptplayground.com/functional-stateless-components-react/
const Header = ({ username }) => {
  return (
    <header className="header padding-vertical-xl" {...header}>
      <div {...headerWrapper}>
        <h1 {...headerText}>
          <a href="https://www.reponotes.com" {...headerLink}>
            RepoNotes
          </a>
          <span>{username && ` for ${username}`}</span>
        </h1>
        <p {...css(headerText, subHeaderText)}>
          Offline-capable, locally-persisted ideation assister for your GitHub repositories
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string
};

// https://reactjs.org/docs/react-api.html#reactmemo
// https://scotch.io/tutorials/react-166-reactmemo-for-functional-components-rendering-control
export default React.memo(Header);
