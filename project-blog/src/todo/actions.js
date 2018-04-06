// 定义 todo 模块中所有 action 的构造函数

import { ADD_TODO,SEARCH } from './actionTypes';

/**
 * ADD_TODO action 异步构造函数
 * @param {*} text 备忘录具体内容
 */
export const addTodo = (text) => {
    return (dispatch,getState) => {
        
        const state = getState();
        localStorage.setItem('todos',JSON.stringify([
            ...state.todos,
            {
                todo: text,
                istodo: true,
                doing: false,
                done: false
            }
        ]));

        // 测试异步数据流
        setTimeout(function(){
            dispatch({type:ADD_TODO,text:text})
        },2)
    }
}

/**
 * SEARCH action 构造函数
 * @param {*} text 查询具体内容
 */
export function search(text) {
    return {
        type: SEARCH,
        text,
    };
}