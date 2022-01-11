import React, { Component } from 'react';
import Count from './components/Count';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}

export default App;
