import {FETCH_SUCCESS,FETCH_FAILURE,FETCH_STARTED} from './actionTypes';

// 三个同步的 action 构造函数和一个异步的 action 构造函数

/**
 * 异步请求开始action的构造函数
 */
export const fetchWeatherStarted = () => {
    return {
        type:FETCH_STARTED
    }
}

/**
 * 异步请求成功action的构造函数，需要把响应结果传递进来
 * @param {*} result 
 */
export const fetchWeatherSuccess = (result) => {
    return {
        type:FETCH_SUCCESS,
        result
    }
}

/**
 * 异步请求失败action构造函数，需要把错误信息传递进来
 * @param {*} error 
 */
export const fetchWeatherFailure = (error) => {
    return {
        type:FETCH_FAILURE,
        error
    }
}

/**
 * 给每个访问 API 的请求做序列编号
 */
let nextSeqId = 0;

const appCode = '30e37351cadf480494cde3aa049f6ba6';
export const fetchWeatherAsync = (cityCode) => {
    return (dispatch,getState) => {
        const apiUrl = `http://jisutqybmf.market.alicloudapi.com/weather/query?citycode=${cityCode}`;

        /**
         * 检查当前环境的 seqId 和 全局的 nextSeqId 是否相同
         */
        const seqId = ++ nextSeqId;
        const dispatchVliad = (action) => {
            if(seqId === nextSeqId){
                return dispatch(action);
            }
        }

        // 派发一个 异步请求开始的action
        dispatchVliad(fetchWeatherStarted());

        fetch(apiUrl,{
            method:'get',
            headers:{
                'Authorization':`APPCODE ${appCode}`
            }
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                // 派发一个 异步请求成功的action
                dispatchVliad(fetchWeatherSuccess(responseJson.result));
            }).catch((error) => {
                // 派发一个 异步请求失败的action
                dispatchVliad(fetchWeatherFailure(error));
            });
        }).catch((error) => {
            // 派发一个 异步请求失败的action
            dispatch(fetchWeatherFailure(error));
        });
    }
}