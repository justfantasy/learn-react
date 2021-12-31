import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Items from './components/Items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Items />
      </div>
    );
  }
}

export default App;
