import React from 'react';
import ReactDom from 'react-dom';
import store from './redux/store';
import App from './App'; // 此处引入的组件可修改

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

store.subscribe(() => {
  ReactDom.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
