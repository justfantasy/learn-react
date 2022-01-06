import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Show from './Show';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [{ id: '1', title: '001' }, { id: '2', title: '002' }, { id: '3', title: '003' }] };
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="content">
        <ul>
          {
            messages.map((message) => (
              <li key={message.id}>
                {/* <Link to={`/home/message/show?id=${message.id}`}>{message.title}</Link> */}
                {/* <Link to={`/home/message/show/${message.id}`}>{message.title}</Link> */}
                <Link to={{ pathname: '/home/message/show', state: { id: message.id } }}>{message.title}</Link>
              </li>
            ))
          }
        </ul>
        <Route path="/home/message/show" component={Show} />
        {/* <Route path="/home/message/show/:id" component={Show} /> */}
      </div>
    );
  }
}

export default Message;
