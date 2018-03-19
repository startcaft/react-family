import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Store from '../stores/Store';

/**
 * 无状态组件，只通过 props 渲染结果
 */
class Summary extends Component {
  render() {
    return (
      <div>Total Count: {this.props.sum}</div>
    );
  }
}
Summary.propTypes = {
  sum: PropTypes.number.isRequired
};


/**
 * 容器组件，负责跟 Redux Store 打交道，并传值给 无状态组件
 */
class SummaryContainer extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  componentDidMount() {
    Store.subscribe(this.onChange);
  }
  componentWillUnmount() {
    Store.unsubscribe(this.onChange);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState(){
    const state = Store.getState();
    let sum = 0;
    for(const key in state){
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return {sum : sum};
  }

  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    );
  }
}

export default SummaryContainer;
