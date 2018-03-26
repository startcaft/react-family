import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';
import * as Status from './status';

/**
 * 请求天气预报的 reudcer 纯函数
 * @param {*} state 默认 state={status:status.LOADING}
 * @param {*} action 当前执行的action动作
 */
export default (state = {status: Status.LOADING}, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {status: Status.LOADING};
    }
    case FETCH_SUCCESS: {
      return {...state, status: Status.SUCCESS, ...action.result};
    }
    case FETCH_FAILURE: {
      return {status: Status.FAILURE};
    }
    default: {
      return state;
    }
  }
}