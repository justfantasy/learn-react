import React, { Component, createRef } from 'react';
import store from '../../redux/store';
import { incrementAction, decrementAction, incrementAsync } from '../../redux/actions/count';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = createRef();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  increment = () => {
    store.dispatch(incrementAction(+this.ref.current.value));
  };

  decrement = () => {
    store.dispatch(decrementAction(+this.ref.current.value));
  };

  oddIncrement = () => {
    const count = store.getState();
    if (count % 2 !== 0) {
      this.increment();
    }
  };

  asyncIncrement = () => {
    store.dispatch(incrementAsync(+this.ref.current.value, 1000));
  };

  render() {
    return (
      <div>
        <h1>
          当前求和为：
          {store.getState()}
        </h1>
        <select ref={this.ref}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button type="button" onClick={this.increment}>+</button>
        &nbsp;
        <button type="button" onClick={this.decrement}>-</button>
        &nbsp;
        <button type="button" onClick={this.oddIncrement}>当前求和为奇数加</button>
        &nbsp;
        <button type="button" onClick={this.asyncIncrement}>异步加</button>
      </div>
    );
  }
}

export default Count;
