import React, { Component } from 'react';
import Count from './containers/Count';
import Person from './containers/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}

export default App;
