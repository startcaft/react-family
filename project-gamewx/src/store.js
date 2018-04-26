/**
 * Created by Administrator on 2018/4/26.
 */

import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer} from './ArticleModule/index';

// 组合 reducer
const articleReducer = combineReducers({
    articleState: reducer
});


export default createStore(articleReducer,applyMiddleware(thunkMiddleware));