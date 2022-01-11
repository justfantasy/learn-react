import { INCREMENT, DECREMENT } from '../constants';

function count(preState, action) {
  const initState = 0;
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return initState;
  }
}

export default count;
