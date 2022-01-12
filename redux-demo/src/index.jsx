import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'; // 用于APP后代组件接收store
import store from './redux/store';
import App from './App'; // 此处引入的组件可修改

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
