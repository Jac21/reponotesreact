import React, { Component } from 'react';

import Header from './components/Common/Header';
import Navbar from './components/Navbar/Navbar';
import RepoNoteList from './components/RepoNoteList/RepoNoteList';
import UsernameForm from './components/UsernameForm/UsernameForm';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Header />
          <UsernameForm />
          <RepoNoteList />
        </div>
      </div>
    );
  }
}

export default App;
