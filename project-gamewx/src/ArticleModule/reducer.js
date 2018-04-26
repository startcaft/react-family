/**
 * Created by Administrator on 2018/4/26.
 */

import { REQUEST_ARTILCES_START,REQUEST_ARTICLES_SUCCESS,REQUEST_ARTILCES_FAIL } from './actionTypes';

const initState = {
    /**
     * 是否正在请求数据
     */
    isLoading:false,
    /**
     * 文章列表
     */
    articles:[],
    /**
     * 请求服务器失败的提示信息
     */
    errorMsg:'',
};

export default function reducer(state=initState,action){
    switch (action.type){
        case REQUEST_ARTILCES_START:
            return {
                ...state,
                isLoading:true
            }
        case REQUEST_ARTICLES_SUCCESS:
            return {
                ...state,
                isLoading:false,
                articles:action.articles
            }
        case REQUEST_ARTILCES_FAIL:
            return {
                ...state,
                isLoading:false,
                errorMsg:'请求数据发生错误'
            }
        default:
            return state;
    }
}