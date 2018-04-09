import { ADD_TODO,SEARCH,CHANGE_TODO_TO_DOING, 
    DELETE_TODO
} from './actionTypes';


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
        case CHANGE_TODO_TO_DOING:
            // 先从 state.todos 里面删除指定下表的数据
            // 然后 将该条数据的状态改成 doing
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0,action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]
        case DELETE_TODO:
            let newState = [
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ];
            localStorage.setItem('todos', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
}

export default reducer;