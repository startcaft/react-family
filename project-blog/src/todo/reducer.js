import { ADD_TODO,SEARCH } from './actionTypes';


// 初始数据源，自运行函数
let todos;
(() => {
    if(localStorage.todos){
        todos = JSON.parse(localStorage.todos);
    }
    else {
        todos = [];
    }
})();


const reducer = (state = todos,action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    todo: action.text,
                    istodo: true,
                    doing: false,
                    done: false
                }
            ]
        case SEARCH:
            const text = action.text;
            const reg = eval("/"+text+"/gi");
            return state.filter(item => item.todo.match(reg));
        default:
            return state;
    }
}

export default reducer;