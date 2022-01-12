import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, incrementAsync } from '../../redux/actions/count';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = createRef();
  }

  increment = () => {
    const { increment } = this.props;
    increment(+this.ref.current.value);
  };

  decrement = () => {
    const { decrement } = this.props;
    decrement(+this.ref.current.value);
  };

  oddIncrement = () => {
    const { state } = this.props;
    if (state % 2 !== 0) {
      this.increment();
    }
  };

  asyncIncrement = () => {
    const { incAsync } = this.props;
    incAsync(+this.ref.current.value, 1000);
  };

  render() {
    const { state } = this.props;
    return (
      <div>
        <h1>
          当前求和为：
          {state}
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

Count.propTypes = {
  state: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incAsync: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ state }),
  { increment: incrementAction, decrement: decrementAction, incAsync: incrementAsync }, // 对象形式自动分发
)(Count);
