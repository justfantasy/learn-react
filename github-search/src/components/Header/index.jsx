import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchUser } from '../../api/api';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  doSearch = () => {
    const { updateItems, changeState } = this.props;
    const { value } = this.state;
    if (value.length > 0) {
      changeState({
        loading: true,
        items: [],
        msg: '查询中，请稍候...',
      });
      searchUser(value).then((res) => {
        updateItems(res?.data?.items);
      }).catch((error) => {
        let err = '出错了：';
        if (error.response) {
          // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
          err += error.response.statusText;
        } else if (error.request) {
          // 请求已经成功发起，但没有收到响应
          // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
          // 而在node.js中是 http.ClientRequest 的实例
          err += '服务器无响应';
        } else {
          // 发送请求时出了点问题
          err += error.message;
        }
        changeState({
          msg: err,
        });
      });
    }
  };

  inputChange = (e) => {
    const { value } = e.target;
    this.setState({
      value: value.trim(),
    });
  };

  inputSubmit = (e) => {
    const { keyCode } = e;
    if (keyCode === 13) {
      this.doSearch();
    }
  };

  render() {
    return (
      <div className="header">
        <div className="search-area">
          <input
            onChange={this.inputChange}
            onKeyDown={this.inputSubmit}
            type="text"
            className="search"
            placeholder="请输入搜索的用户名"
          />
          <button type="button" className="btn" onClick={this.doSearch}>搜索</button>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  changeState: PropTypes.func.isRequired,
  updateItems: PropTypes.func.isRequired,
};

export default Index;
