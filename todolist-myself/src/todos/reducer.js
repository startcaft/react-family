import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from './actionTypes';

/**
 * addtodo 组件的 action 响应函数，
 * 状态书节点数据结构为
 * [
 *  {id,text,completed}
 * ]
 * 初始状态为一个空的数组 []
 * @param {*} state 当前状态
 * @param {*} action action 对象
 */
export default function todoReducer(state = [],action){
    switch(action.type){
        case ADD_TODO:
            const newState = [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
                ,
                ...state
            ]
            return newState;
        case TOGGLE_TODO:
            return state.map((todoItem) => {
                if(todoItem.id === action.id){
                    return {
                        ...todoItem,completed:!todoItem.completed
                    }
                } else {
                    return todoItem;
                }
            })
        case REMOVE_TODO:
            return state.filter((todoItem) => {
                return todoItem.id !== action.id
            })
        default:
            return state;
    }
}