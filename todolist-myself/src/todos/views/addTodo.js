import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addTodo} from '../actions.js';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value:''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.onInputChange} value={this.state.value} />
            <button type="submit">
              添加
            </button>
        </form>
      </div>
    )
  }

  onSubmit(e){
    e.preventDefault();

    const inputValue = this.state.value;
    if(!inputValue.trim()){
      return;
    }

    this.props.onAdd(inputValue);

    this.setState({
      value:''
    })
  }
  onInputChange(event){
    this.setState({
      value:event.target.value
    })
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


// 把一个函数 映射成派发一个动作，dispatch(action) ，并通过 props 传递给内层傻瓜组件
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd:(text) => {
      dispatch(addTodo(text));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);