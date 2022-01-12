import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './reducers/count';
import personReducer from './reducers/person';

const store = createStore(combineReducers({
  countReducer,
  personReducer,
}), applyMiddleware(thunk));

export default store;
