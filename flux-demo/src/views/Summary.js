import React, { Component } from 'react';

import SumStore from '../stores/SumStore.js';

class Summary extends Component {

  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);

    this.state = {
      sum: SumStore.getSummary()
    }
  }

  componentDidMount() {
    SumStore.addChangeListener(this.onUpdate);
  }

  componentWillUnmount() {
    SumStore.removeChangeListener(this.onUpdate);
  }

  onUpdate() {
    this.setState({
      sum: SumStore.getSummary()
    })
  }

  render() {
    return (
      <div>Total Count: {this.state.sum}</div>
    );
  }
}

export default Summary;
