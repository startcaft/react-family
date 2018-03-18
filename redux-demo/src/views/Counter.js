import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Store from '../stores/Store';
import * as Actions from '../actions/Actions';

class Counter extends Component {
    constructor(props){
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);

        this.state = this.getOwnState();
    }

    componentDidMount() {
        Store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        Store.unsubscribe(this.onChange);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
          (nextState.value !== this.state.value);
      }

    getOwnState() {
        return {
          value: Store.getState()[this.props.caption]
        };
    }
    onChange() {
        this.setState(this.getOwnState());
    }

    onIncrement(){
        Store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement(){
        Store.dispatch(Actions.decrement(this.props.caption));
    }

    render(){
        const {caption} = this.props;
        const value = this.state.value;
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption:PropTypes.string.isRequired,

}

export default Counter;