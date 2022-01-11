function count(preState, action) {
  const initState = 0;
  const { type, data } = action;
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return initState;
  }
}

export default count;
