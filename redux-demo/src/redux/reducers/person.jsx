import { ADD_PERSON } from '../constants';

export default (preState, action) => {
  const initState = [];
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return initState;
  }
};
