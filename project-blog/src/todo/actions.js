// 定义 todo 模块中所有 action 的构造函数

import { ADD_TODO,SEARCH,CHANGE_TODO_TO_DOING,
    CHANGE_DONE_TO_DOING,DELETE_TODO,
    CHANGE_DOING_TO_DONE,CHANGE_DOING_TO_TODO
} 
from './actionTypes';


/**
 * 将 新建备忘录 转换成 正在进行中的备忘录，
 * @param {*} index 备忘录数据数组下标
 */
export function changeTodoToDoing(index) {
    return {
        type: CHANGE_TODO_TO_DOING,
        index,
    };
}

/**
 * 状态由done转为doing
 * @param index 需要改变状态的事项的下标
 * @returns {{type: string, index: *}}
 */
export function changeDoneToDoing(index) {
    return {
        type: CHANGE_DONE_TO_DOING,
        index,
    };
}

/**
 * 状态由doing转为todo
 * @param index 需要改变状态的事项的下标
 * @returns {{type: *, index: *}}
 */
export function changeDoingToTodo(index) {
    return {
        type: CHANGE_DOING_TO_TODO,
        index,
    };
}

/**
 * 将状态由 doing 转为 done
 * @param index 需要改变状态的事项的下标
 * @returns {{type: *, index: *}}
 */
export function changeDoingToDone(index) {
    return {
        type: CHANGE_DOING_TO_DONE,
        index,
    };
}
    
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

/**
 * 删除指定下标的备忘录
 * @param {*} index 下标
 */
export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index,
    };
}