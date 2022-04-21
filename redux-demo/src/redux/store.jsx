import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// redux-thunk主要的功能就是可以让我们dispatch一个函数，而不只是普通的 Object
export default createStore(reducers, applyMiddleware(thunk));
