import React, { Component } from 'react';

import Header from './components/Header/Header';
import RepoNote from './components/RepoNote/RepoNote';
import UsernameForm from './components/UsernameForm/UsernameForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UsernameForm />
        <RepoNote repoName="RepoNotes" />
      </div>
    );
  }
}

export default App;
