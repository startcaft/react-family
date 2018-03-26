import { applyMiddleware, createStore,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as weatherReducer} from './weather/index';

/**
 * 这就是 Store 树的结构
 */
const reudcer = combineReducers({
    weather:weatherReducer
});

export default createStore(reudcer, {}, applyMiddleware(thunkMiddleware));