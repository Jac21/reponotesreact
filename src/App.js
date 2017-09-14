import React, { Component } from 'react';

import Header from './components/Common/Header';
import Navbar from './components/Navbar/Navbar';
import RepoNoteList from './components/RepoNoteList/RepoNoteList';
// import UsernameForm from './components/UsernameForm/UsernameForm';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("LastHandle"),
      repos: null
    };
  }

  componentDidMount() {
    if (this.state.username) {
      var cachedRepositories = localStorage.getItem(this.state.username);
      this.setState({ repos: JSON.parse(cachedRepositories) });
    }
  }

  onSearch = (e) => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    } else {
      this.setState({ username: value });
      localStorage.setItem("LastHandle", value);
    }

    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({ repos: JSON.parse(cachedHits) });
      return;
    }

    fetch('https://api.github.com/users/' + value + '/repos')
      .then(response => response.json())
      .then(result => this.onSetResult(result, value));
  }

  onSetResult = (result, key) => {
    localStorage.setItem(key, JSON.stringify(result));
    this.setState({ repos: result });
  }

  render() {
    return (
      <div className="App">
        <Navbar repositories={this.state.repos} />
        <div className="main">
          <Header />

          <form onSubmit={this.onSearch}>
            <div className="field">
              <input type="text" id="form-github-username"
                placeholder={this.state.username || "Enter your GitHub Username..."}
                ref={node => this.input = node} />
            </div>
            <div className="field">
              <button type="submit" className="button"
                onClick={this.onSearch}>Get and Show Repository Data</button>
            </div>
          </form>

          <RepoNoteList repositories={this.state.repos} />
        </div>
      </div>
    );
  }
}

export default App;
