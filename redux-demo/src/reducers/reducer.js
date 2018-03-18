import * as ActionTypes from '../actions/ActionTypes'

/**
 * reducer 纯函数，改变应用当前状态；
 * @param {*} state 当前状态
 * @param {*} action 动作
 */
function reducer(state,action){
    const {counterCaption} = action;

    switch(action.type){
        case ActionTypes.INCREMENT:
            return {...state,[counterCaption]:state[counterCaption] + 1};
        case ActionTypes.DECREMENT:
            return {...state,[counterCaption]:state[counterCaption] - 1};
        default:
            return state
    }
}

export default reducer;