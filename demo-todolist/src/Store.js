import {createStore,combineReducers} from 'redux';
import {reducer as todoListReducer} from './todos/index';
import {reducer as filterReducer} from './filter/index';


const reducer = combineReducers({
    todos: todoListReducer,
    filter: filterReducer
});

export default createStore(reducer,{})