import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDisptcher';

// 生成 Action 的函数
export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    })
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    })
};