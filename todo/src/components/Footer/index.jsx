import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items, updateAll, deleteAllDone } = this.props;
    const total = items.length;
    const finish = items.reduce((num, item) => (item.done ? num + 1 : num), 0);

    return (
      <div className="footer">
        <div className="item-value">
          <input type="checkbox" checked={finish === total && total > 0} onChange={updateAll} />
          已完成
          {' '}
          { finish }
          {' '}
          / 全部
          {' '}
          { total }
        </div>
        <button type="button" className="btn" onClick={deleteAllDone}>清除已完成任务</button>
      </div>
    );
  }
}

Index.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateAll: PropTypes.func.isRequired,
  deleteAllDone: PropTypes.func.isRequired,
};

export default Index;
