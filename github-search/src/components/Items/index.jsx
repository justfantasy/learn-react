import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items } = this.props;
    const itemList = items.map((item) => (
      <li key={item.login} className="item">
        <img src={item.avatar_url} alt="" />
        <div className="name">{item.login}</div>
      </li>
    ));
    return (
      <ul className="items">
        {itemList}
      </ul>
    );
  }
}

Index.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
