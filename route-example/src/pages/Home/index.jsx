import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import News from './News';
import Message from './Messsage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        Home...
        <div className="home-nav nav-common">
          <NavLink to="/home/news">News</NavLink>
          <NavLink to="/home/message">Message</NavLink>
        </div>
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
        </Switch>
      </div>
    );
  }
}

export default Home;
