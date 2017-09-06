import React, { Component } from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RepoNoteList from './components/RepoNoteList/RepoNoteList';
import UsernameForm from './components/UsernameForm/UsernameForm';

import './css/App.css';

class App extends Component {
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
