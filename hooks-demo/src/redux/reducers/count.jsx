import { INCREMENT, DECREMENT } from '../constant';

const initState = 0;
// eslint-disable-next-line default-param-last
function count(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}

export default count;
