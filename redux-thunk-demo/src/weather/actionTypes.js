// 异步请求的三个状态，对应三个普通（同步）的 action
 

 /**
  * 异步请求开始
  */
export const FETCH_STARTED = 'WEATHER/FETCH_STARTED';

/**
 * 异步请求成功，获取服务器响应数据
 */
export const FETCH_SUCCESS = 'WEATHER/FETCH_SUCCESS';

/**
 * 异步请求失败
 */
export const FETCH_FAILURE = 'WEATHER/FETCH_FAILURE';