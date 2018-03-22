import {SET_FILTER} from './actionTypes';
import {FilterTypes} from '../constants';

/**
 * 过滤 代办事项的 动作的 响应函数
 */
export default (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}