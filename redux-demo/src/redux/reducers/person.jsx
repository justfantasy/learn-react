import { ADD_PERSON } from '../constants';

const initState = [];
// eslint-disable-next-line default-param-last
export default (preState = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
};
