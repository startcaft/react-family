import React, { Component } from 'react';

import Store from '../stores/Store';

class Summary extends Component {

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
      <div>Total Count: {this.state.sum}</div>
    );
  }
}

export default Summary;
