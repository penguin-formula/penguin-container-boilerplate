import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import Penguinlist from './component/penguinlist/penguinlist';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Penguinlist />
      </div>
    );
  }
}

export default App;
