import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createItem = (e) => {
    const { createItem } = this.props;
    const { target, keyCode } = e;
    if (keyCode === 13 && target.value.trim().length > 0) {
      createItem({
        id: nanoid(6),
        name: target.value,
        done: false,
      });
      target.value = '';
    }
  };

  render() {
    return (
      <div className="header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.createItem} />
      </div>
    );
  }
}

Index.propTypes = {
  createItem: PropTypes.func.isRequired,
};

export default Index;
