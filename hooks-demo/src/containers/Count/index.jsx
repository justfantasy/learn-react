import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from '../../redux/actions/count';

function Count(props) {
  const { count, increment: incr, decrement: decr } = props;
  const ref = useRef(); // 使用createRef测试也是正常的。
  const [person, setPerson] = useState({ id: '01', name: '小明' });

  useEffect(() => {
    // 默认执行componentDidMount
    document.title = `You clicked ${count} times`;
    const timer = setInterval(() => {
      incr(1);
    }, 1000);

    // 返回回调函数，类似执行componentWillUnmount方法
    return () => {
      clearInterval(timer);
    };
  }, []); // 传入空数组，表示不执行componentDidUpdate方法，需要监测updated状态值传入指定的状态值 [count]

  const doIncr = () => {
    incr(+ref.current.value);
  };

  const doDecr = () => {
    decr(+ref.current.value);
  };

  const doOddIncr = () => {
    if (count % 2 !== 0) {
      doIncr();
    }
  };

  const doChangePerson = () => {
    setPerson({ id: '02', name: '刘德华' });
    // setPerson((obj) => ({ ...obj, ...{ name: '刘德华' } }));
  };

  const doUnmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('root'));
  };

  return (
    <div>
      <h1>
        当前求和为：
        {count}
        -
        {person.name}
      </h1>
      <select ref={ref}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button type="button" onClick={doIncr}>+</button>
      &nbsp;
      <button type="button" onClick={doDecr}>-</button>
      &nbsp;
      <button type="button" onClick={doOddIncr}>当前求和为奇数加</button>
      &nbsp;
      <button type="button" onClick={doChangePerson}>更改用户</button>
      &nbsp;
      <button type="button" onClick={doUnmount}>卸载组件</button>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ count: state.count }),
  { increment, decrement },
)(Count);
