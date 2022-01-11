import React, { Component } from 'react';
import Count from './containers/Count';
import store from './redux/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    );
  }
}

export default App;
