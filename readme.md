### react学习项目
#### 项目初始化安装（自定义，效果与create-react-app差不多，都是使用react-scripts）
1. 安装基础依赖
```bash
npm init

npm i -S react react-dom prop-types

npm i -D react-scripts sass 

npx eslint --init
```
2. 修改package.json文件，增加命令
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
```
3. 新增目录src和public
4. 新增文件public/index.html
```html
<!doctype html>
<html lang=zh-CN>
<head>
    <meta charset="UTF-8">
  	<!-- %PUBLIC_URL% 该变量指向public目录 -->
  	<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
```
5. 新增入口文件src/index.jsx
```js
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
```
6. 新增框架文件App.jsx和App.scss
```js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        App...
      </div>
    );
  }
}

export default App;
```
