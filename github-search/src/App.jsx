import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Items from './components/Items';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loading: false, msg: '' };
  }

  updateItems = (items) => {
    this.setState({
      items,
      loading: false,
    });
  };

  changeState = (state) => {
    this.setState(state);
  };

  render() {
    const { items, loading, msg } = this.state;
    return (
      <div className="container">
        <Header updateItems={this.updateItems} changeState={this.changeState} />
        <div className={`loading ${loading ? '' : 'hide'}`}>{msg}</div>
        <Items items={items} />
      </div>
    );
  }
}

export default App;
