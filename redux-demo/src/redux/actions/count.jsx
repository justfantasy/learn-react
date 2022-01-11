import { INCREMENT, DECREMENT } from '../constants';

const incrementAction = (data) => ({ type: INCREMENT, data });
const decrementAction = (data) => ({ type: DECREMENT, data });

export {
  incrementAction,
  decrementAction,
};
