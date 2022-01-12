import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { addPersonAction } from '../../redux/actions/person';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.nameRef = createRef();
    this.ageRef = createRef();
  }

  formSubmit = (event) => {
    const { addPerson } = this.props;
    event.preventDefault();
    addPerson({
      id: nanoid(6),
      name: this.nameRef.current.value,
      age: this.ageRef.current.value,
    });
    this.nameRef.current.value = '';
    this.ageRef.current.value = '';
  };

  render() {
    const { person, count } = this.props;
    return (
      <div>
        <h2>
          Person组件
          {count}
        </h2>
        <form onSubmit={this.formSubmit}>
          <input ref={this.nameRef} type="text" name="name" placeholder="请输入姓名" />
          <input ref={this.ageRef} type="text" name="age" placeholder="请输入年龄" />
          <button type="submit">增加</button>
        </form>
        <ul>
          {
            person.map((item) => (
              <li key={item.id}>
                {item.name}
                -
                {item.age}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Person.propTypes = {
  addPerson: PropTypes.func.isRequired,
  person: PropTypes.arrayOf(PropTypes.any).isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(
  (state) => ({ person: state.personReducer, count: state.countReducer }),
  { addPerson: addPersonAction },
)(Person);
