import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import NavbarList from '../NavbarList/NavbarList';

const navbar = css({
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: `${260}px`,
  height: `${100}%`,
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  background: 'white',
  borderRight: `${1}px solid #e5e5e8`
});

const navbarInput = css({
  margin: 0
});

// Parent Navbar component
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  includesPolyfilled = (name, input) => {
    if (!String.prototype.includes) {
      return name.indexOf(input) !== -1;
    }

    return name.includes(input);
  };

  // Handles input change event, saves value to state variable
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <aside {...navbar} className="sidebar">
        <input
          {...navbarInput}
          id="search-input"
          className="search-input"
          type="search"
          placeholder="Repository name..."
          value={this.state.input}
          onChange={this.handleChange}
        />
        <nav className="navigation">
          <ul>
            {this.props.repositories &&
              this.props.repositories
                .filter(
                  d => this.state.input === '' || this.includesPolyfilled(d.name, this.state.input)
                )
                .map(item => (
                  <NavbarList
                    key={item.id}
                    username={this.props.username}
                    repositoryName={item.name}
                    repositoryLink={item.html_url}
                  />
                ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

Navbar.propTypes = {
  username: PropTypes.string,
  repositories: PropTypes.array
};

export default Navbar;
