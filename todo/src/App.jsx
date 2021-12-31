import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  createItem = (item) => {
    const { items } = this.state;
    this.setState({
      items: [item, ...items],
    });
  };

  updateItem = (id, done) => {
    const { items } = this.state;
    const index = items.findIndex((item) => item.id === id);
    items[index].done = done;
    this.setState({
      items,
    });
  };

  deleteItem = (id) => {
    const { items } = this.state;
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
    this.setState({
      items,
    });
  };

  updateAll = (e) => {
    const { items } = this.state;
    const { checked } = e.target;
    const newItems = items.map((item) => ({ ...item, done: checked }));
    this.setState({
      items: newItems,
    });
  };

  deleteAllDone = () => {
    const { items } = this.state;
    const newItems = items.filter((item) => !item.done);
    this.setState({
      items: newItems,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <Header createItem={this.createItem} />
        <Items items={items} updateItem={this.updateItem} deleteItem={this.deleteItem} />
        <Footer items={items} deleteAllDone={this.deleteAllDone} updateAll={this.updateAll} />
      </div>
    );
  }
}

export default App;
