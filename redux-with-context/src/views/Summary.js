import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }
  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState(){
    const state = this.context.store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
  }

  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    );
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer;
