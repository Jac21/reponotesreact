import React, { Component } from 'react';

import Header from './components/Common/Header';
import ErrorAlert from './components/Common/Alerts/ErrorAlert';
import Navbar from './components/Navbar/Navbar';
import RepoNoteList from './components/RepoNoteList/RepoNoteList';
// import UsernameForm from './components/UsernameForm/UsernameForm';

import './css/App.css';

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
      var cachedRepositories = localStorage.getItem(this.state.username);
      this.setState({ repositories: JSON.parse(cachedRepositories) });
    }
  }

  // Set local storage key for user, fetch GitHub repository data,
  // and set local storage cache on retreived JSON
  onSearch = (e) => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    } else {
      this.setState({ username: value });
      localStorage.setItem('LastHandle', value);
    }

    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({ repositories: JSON.parse(cachedHits) });
      return;
    }

    fetch(`https://api.github.com/users/${value}/repos`)
      .catch(error => {
        return Promise.reject(error);
      })
      .then(response => response.json())
      .then(result => this.onSetResult(result, value));
  }

  onSetResult = (result, key) => {
    if (result.message === "Not Found") {
      localStorage.removeItem('LastHandle');
      this.setState({ errorState: true });
    } else {
      localStorage.setItem(key, JSON.stringify(result));
      this.setState({ errorState: false });
      this.setState({ repositories: result });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar repositories={this.state.repositories} />
        <div className="main">
          <Header username={this.state.username} />

          <div className="container">

            {this.state.errorState ?
              <ErrorAlert message="User not found! Please try entering an existing GitHub user again." />
              : null
            }

            <form onSubmit={this.onSearch}>
              <div className="field">
                <input type="text" id="form-github-username" aria-label="Enter your GitHub Username..."
                  placeholder={this.state.username || "Enter your GitHub Username..."}
                  ref={node => this.input = node} />
              </div>
              <div className="field">
                <button type="submit" className="button button-primary button-primary-reponotes"
                  onClick={this.onSearch}>Get and Show Repository Data</button>
              </div>
            </form>

            <RepoNoteList repositories={this.state.repositories} username={this.state.username} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;