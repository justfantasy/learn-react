import { INCREMENT, DECREMENT } from '../constants';

const incrementAction = (data) => ({ type: INCREMENT, data });
const decrementAction = (data) => ({ type: DECREMENT, data });
const incrementAsync = (data, time) => (dispatch) => {
  setTimeout(() => dispatch(incrementAction(data)), time);
};

export {
  incrementAction,
  decrementAction,
  incrementAsync,
};
