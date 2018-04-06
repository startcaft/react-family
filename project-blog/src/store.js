import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as todoReducer } from './todo/index';

// 组合 reducer
const reducer = combineReducers({
    todos: todoReducer
});


export default createStore(reducer,applyMiddleware(thunkMiddleware));