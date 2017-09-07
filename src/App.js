import React, { Component } from 'react';

import Header from './components/Common/Header';
import Navbar from './components/Navbar/Navbar';
import RepoNoteList from './components/RepoNoteList/RepoNoteList';
import UsernameForm from './components/UsernameForm/UsernameForm';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null
    };
  }

  onSearch = (e) => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    }

    fetch('https://api.github.com/users/' + value + '/repos')
      .then(response => response.json())
      .then(result => this.onSetResult(result));
  }

  onSetResult = (result) => {
    console.log(result);
    this.setState({ repos: result });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Header />
          <UsernameForm />

        <div>
        <p>There shouldn't be a second network request, when you search for something twice.</p>

        <form type="submit" onSubmit={this.onSearch}>
          <input type="text" ref={node => this.input = node} />
          <button type="button">Search</button>
        </form>

        {
          this.state.repos &&
          this.state.repos.map(item => <div key={item.id}>{item.name}</div>)
        }
      </div>
          <RepoNoteList />
        </div>
      </div>
    );
  }
}

export default App;
