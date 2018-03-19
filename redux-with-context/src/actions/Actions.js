import * as ActionTypes from './ActionTypes';

// 在 Redux 中每个 Action 构造函数都会返回一个 Action 对象；
export const increment = (counterCaption) => {
    return {
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    }
};

export const decrement = (counterCaption) => {
    return {
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    }
};