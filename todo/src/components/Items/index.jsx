import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import Item from '../Item';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items, updateItem, deleteItem } = this.props;
    const listItems = items.map(
      (item) => (
        <Item
          key={item.id}
          item={item}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      ),
    );
    return (
      <ul className="items">
        {listItems}
      </ul>
    );
  }
}

Index.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Index;
