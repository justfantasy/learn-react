import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  focusItem = (hover) => () => {
    this.setState({
      hover,
    });
  };

  updateItem = (index) => (e) => {
    const { updateItem } = this.props;
    const { checked } = e.target;
    updateItem(index, checked);
  };

  deleteItem = (index) => () => {
    const { deleteItem } = this.props;
    deleteItem(index);
  };

  render() {
    const { item } = this.props;
    const { hover } = this.state;
    return (
      <li className={`item ${hover ? 'bg' : ''}`} onMouseEnter={this.focusItem(true)} onMouseLeave={this.focusItem(false)}>
        <div className="item-value">
          <input type="checkbox" id={item.id} checked={item.done} onChange={this.updateItem(item.id)} />
          <label htmlFor={item.id}>{item.name}</label>
        </div>
        <button type="button" className={`btn ${hover ? '' : 'hide'}`} onClick={this.deleteItem(item.id)}>删除</button>
      </li>
    );
  }
}

Index.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Index;
