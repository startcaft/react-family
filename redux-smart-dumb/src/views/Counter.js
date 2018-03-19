import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Store from '../stores/Store';
import * as Actions from '../actions/Actions';


/**
 *  Counter 变成一个无状态的组件，只通过 props 来渲染结果
 */
class Counter extends Component {
    render(){
        const {caption,onIncrement,onDecrement,value} = this.props;

        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>
                    {caption} count: {value}
                </span>
            </div>
        )
    }
}
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};


/**
 * CounterContainer 容器组件，负责跟 Redux Store 打交道。
 * 并将状态 通过 props 传递给 Counter 组件
 */
class CounterContainer extends Component {
    constructor(props){
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

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
        return <Counter caption={this.props.caption}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                        value={this.state.value} />
    }
}
CounterContainer.propTypes = {
    caption:PropTypes.string.isRequired,
}

export default CounterContainer;