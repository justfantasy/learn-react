import { INCREMENT, DECREMENT } from '../constant';

const increment = (data) => ({ type: INCREMENT, data });
const decrement = (data) => ({ type: DECREMENT, data });

export {
  increment,
  decrement,
};
