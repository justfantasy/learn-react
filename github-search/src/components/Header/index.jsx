import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="search-area">
          <input type="text" className="search" placeholder="请输入搜索的用户名" />
          <button type="button" className="btn">搜索</button>
        </div>
      </div>
    );
  }
}

export default Index;
