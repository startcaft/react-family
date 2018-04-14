import { ADD_TODO,SEARCH,CHANGE_TODO_TO_DOING, 
    DELETE_TODO,CHANGE_DOING_TO_TODO,
    CHANGE_DOING_TO_DONE,CHANGE_DONE_TO_DOING
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
        /**
         * 将todo转为doing
         */
        case CHANGE_TODO_TO_DOING:
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
            ];
        /**
         * 将doing转为todo状态
         */
        case CHANGE_DOING_TO_TODO:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: true,
                    doing: false,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: true,
                    doing: false,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
        /**
         * 将doing转为done状态
         */
        case CHANGE_DOING_TO_DONE:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: false,
                    done: true
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: false,
                    done: true
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
        /**
         * 将done转为doing状态
         */
        case CHANGE_DONE_TO_DOING:
            localStorage.setItem('todos', JSON.stringify([
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                {
                    todo:state[action.index].todo,
                    istodo: false,
                    doing: true,
                    done: false
                },
                ...state.slice(parseInt(action.index) + 1)
            ];
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