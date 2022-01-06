import React, { Component } from 'react';
import PropTypes from 'prop-types';

const messages = [{ id: '1', title: '001' }, { id: '2', title: '002' }, { id: '3', title: '003' }];
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // state参数
    const { location } = this.props;
    const message = messages.find((item) => item.id === location.state?.id);
    console.log(message);

    // search参数
    // const { location } = this.props;
    // const obj = new URLSearchParams(location.search);
    // const message = messages.find((item) => item.id === obj.get('id'));

    // params参数
    // const { match } = this.props;
    // const message = messages.find((item) => item.id === match.params.id);
    return (
      <div className="content">
        <div>
          <span>ID: </span>
          <span>{message?.id}</span>
        </div>
        <div>
          <span>Title: </span>
          <span>{message?.title}</span>
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  // match: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Show;
