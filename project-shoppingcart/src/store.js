/**
 * Created by startcaft on 2018/4/21.
 */

import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer} from './cartModule/index';

// 组合 reducer
const shoppingCartReducer = combineReducers({
    shoppingCart: reducer
});


export default createStore(shoppingCartReducer,applyMiddleware(thunkMiddleware));