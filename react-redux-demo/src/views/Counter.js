import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../actions/Actions';

import {connect} from 'react-redux';


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
 * 将状态转换成组件所定义的 props
 * @param {*} state 状态
 * @param {*} ownProps 组件的 props
 */
function mapStateToProps(state, ownProps) {
    return {
      value: state[ownProps.caption]
    }
}

/**
 * 将组件 props 中的函数属性 关联上 dispatcher 的调用
 * @param {*} dispatch 状态
 * @param {*} ownProps 组件的 props
 */
function mapDispatchToProps(dispatch, ownProps) {
    return {
      onIncrement: () => {
        dispatch(Actions.increment(ownProps.caption));
      },
      onDecrement: () => {
        dispatch(Actions.decrement(ownProps.caption));
      }
    }
}

/**
 * connect 函数用来连接 傻瓜组件和容器组件
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);