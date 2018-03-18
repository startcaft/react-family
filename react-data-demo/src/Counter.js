import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count:this.props.initValue || 0
        }
    }

    onClickIncrementButton(){
        this.updateCount(true);
    }

    onClickDecrementButton(){
        this.updateCount(false);
    }

    updateCount(isIncerement){
        const previousValue = this.state.count;
        const newValue = isIncerement ? this.state.count + 1 : this.state.count - 1;
        this.setState({
            count:newValue
        });
        this.props.onUpdate(newValue,previousValue);
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onClickIncrementButton.bind(this)}>+</button>
                <button onClick={this.onClickDecrementButton.bind(this)}>-</button>
                <span>
                    {caption} count:{this.state.count}
                </span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption:PropTypes.string.isRequired,
    initValue:PropTypes.number,
    onUpdate:PropTypes.func
}

Counter.defaultProps = {
    initValue:0,
    onUpdate: f => f    // 默认是一个什么都不做的函数
}

export default Counter;