import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h2 className="header">路由功能测试</h2>
        <div className="main">
          <div className="nav nav-common">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
