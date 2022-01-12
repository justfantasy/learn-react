import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from '../../redux/actions/count';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = createRef();
  }

  increment = () => {
    const { incr } = this.props;
    incr(+this.ref.current.value);
  };

  decrement = () => {
    const { decr } = this.props;
    decr(+this.ref.current.value);
  };

  oddIncrement = () => {
    const { count } = this.props;
    if (count % 2 !== 0) {
      this.increment();
    }
  };

  asyncIncrement = () => {
    const { incrAsync } = this.props;
    incrAsync(+this.ref.current.value, 1000);
  };

  render() {
    const { count } = this.props;
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

Count.propTypes = {
  count: PropTypes.number.isRequired,
  incr: PropTypes.func.isRequired,
  decr: PropTypes.func.isRequired,
  incrAsync: PropTypes.func.isRequired,
};

// 容器组件将状态和方法传递给子组件UI组件。这样子组件UI组件不需要直接调用store的API，也能保证redux变更状态，UI组件也能重新渲染
export default connect(
  (state) => ({ count: state.count }),
  { incr: increment, decr: decrement, incrAsync: incrementAsync }, // 对象形式自动分发
)(Count);
