import {SET_FILTER} from './actionTypes';

/**
 * 过滤 代办事项 的 action 的构造函数
 * @param {*} filterType 
 */
export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
});