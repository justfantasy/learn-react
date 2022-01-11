import React, { Component, createRef } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.ref = createRef();
  }

  increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + (+this.ref.current.value),
    });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({
      count: count - (+this.ref.current.value),
    });
  };

  oddIncrement = () => {
    const { count } = this.state;
    if (count % 2 !== 0) {
      this.setState({
        count: count + (+this.ref.current.value),
      });
    }
  };

  asyncIncrement = () => {
    const { count } = this.state;
    setTimeout(() => {
      this.setState({
        count: count + (+this.ref.current.value),
      });
    }, 1000);
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>
          当前求和为：
          {count}
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
