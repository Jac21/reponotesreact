import React, { Component } from 'react';

import { css } from 'glamor';

import Header from './components/Common/Header';
import Alert from './components/Common/Alert';
import Navbar from './components/Navbar/Navbar';
import RepoNoteList from './components/RepoNoteList/RepoNoteList';

import './css/App.css';

const formGroup = css({
  marginTop: `${1}em`,
  marginBottom: `${0.5}em`
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('LastHandle'),
      repositories: null,
      errorState: false
    };
  }

  // If user has already retreived notes before, obtain them from
  // local storage cache when component mounts, set state accordingly
  componentDidMount() {
    if (this.state.username) {
      const cachedRepositories = localStorage.getItem(
        this.state.username.toLocaleLowerCase()
      );
      this.setState({ repositories: JSON.parse(cachedRepositories) });
    }
  }

  // Set local storage key for user, fetch GitHub repository data,
  // and set local storage cache on retreived JSON
  onSearch = e => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    }

    this.setState({ username: value });

    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      localStorage.setItem('LastHandle', value);
      this.setState({ repositories: JSON.parse(cachedHits) });
      return;
    }

    fetch(`https://api.github.com/users/${value}/repos`)
      .catch(error => {
        return Promise.reject(error);
      })
      .then(response => response.json())
      .then(result => this.onSetResult(result, value));
  };

  // Set local storage values and results from call if successful
  onSetResult = (result, key) => {
    if (result.message === 'Not Found') {
      this.setState({ errorState: true });
    } else {
      localStorage.setItem('LastHandle', this.state.username);
      localStorage.setItem(key.toLocaleLowerCase(), JSON.stringify(result));
      this.setState({ errorState: false });
      this.setState({ repositories: result });
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onSearch(e);
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          username={this.state.username}
          repositories={this.state.repositories}
        />
        <div className="main">
          <Header username={this.state.username} />

          <div className="container">
            {this.state.errorState ? (
              <Alert
                kind="error"
                message="User not found! Please try entering an existing GitHub user again."
              />
            ) : null}

            <form onSubmit={this.onSearch} {...formGroup}>
              <div className="input-group">
                <input
                  type="text"
                  id="form-github-username"
                  aria-label="Enter your GitHub Username..."
                  placeholder={this.state.username || 'GitHub Username...'}
                  onKeyPress={this.handleKeyPress}
                  ref={node => (this.input = node)}
                />
                <button
                  type="submit"
                  className="button button-primary button-primary-reponotes"
                  onClick={this.onSearch}
                >
                  Show Your Repos
                </button>
              </div>
            </form>

            <RepoNoteList
              repositories={this.state.repositories}
              username={this.state.username}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
