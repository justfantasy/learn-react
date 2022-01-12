import { INCREMENT, DECREMENT } from '../constants';

const increment = (data) => ({ type: INCREMENT, data });
const decrement = (data) => ({ type: DECREMENT, data });
const incrementAsync = (data, time) => (dispatch) => {
  setTimeout(() => dispatch(increment(data)), time);
};

export {
  increment,
  decrement,
  incrementAsync,
};
