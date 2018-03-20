import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type:ADD_TODO,
        text:text,
        id:nextTodoId++,
        completed:false
    }
}

export const toggleTodo = (id) => {
    return {
        type:TOGGLE_TODO,
        id:id
    }
}

export const removeTodo = (id) => {
    return {
        type:REMOVE_TODO,
        id:id
    }
}
