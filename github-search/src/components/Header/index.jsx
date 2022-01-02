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
        changeState({
          msg: error.message,
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
