import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from './actionTypes';

let nextTodoId = 0;

/**
 * 添加代办事项的 action 构造函数
 * @param {*} text 代办事项内容
 */
export const addTodo = (text) => {
    return {
        type:ADD_TODO,
        text:text,
        id:nextTodoId++,
        completed:false
    }
}

/**
 * 切换代办事项列表状态的 action 构造函数
 * @param {*} id 代办事项唯一id
 */
export const toggleTodo = (id) => {
    return {
        type:TOGGLE_TODO,
        id:id
    }
}

/**
 * 移除指定代办事项的 action 构造函数
 * @param {*} id 
 */
export const removeTodo = (id) => {
    return {
        type:REMOVE_TODO,
        id:id
    }
}
