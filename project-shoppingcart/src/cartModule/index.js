/**
 * Created by startcaft on 2018/4/21.
 */


// 模块的边界，统一导出

import * as actions from './actions';
import reducer from './reducer';
import homeView from './view/home';
import detailView from './view/detail';
import cartView from './view/cart';
import historyView from './view/history';

export {actions,reducer,homeView,detailView,cartView,historyView};