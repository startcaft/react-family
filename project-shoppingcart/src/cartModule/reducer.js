/**
 * Created by startcaft on 2018/4/21.
 */

import * as actionTypes from './actionTypes';

const initState = {
    isLoading:false,
    products:[],
    errorMsg:'',
    /**
     * {productId:count}
     */
    idOfQuantity:{},
    /**
     * [{time:productsInCart[]}]
     */
    historys:[]
};

export default function reducer(state=initState,action){
    switch(action.type){
        case actionTypes.PRODUCT_REQUEST_START:
            return {
                ...state,
                isLoading:true
            }
        case actionTypes.PRODUCT_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                products:action.products
            }
        case actionTypes.PRODUCT_REQUEST_FAIL:
            return {
                isLoading:false,
                products:[],
                errorMsg:'请求数据发生错误'
            }
        case actionTypes.CART_ADD_PRODUCT:
            let newIdOfQuantity = state.idOfQuantity;
            if(state.idOfQuantity[action.productId]){
                newIdOfQuantity[action.productId] = (state.idOfQuantity[action.productId] || 0) + 1
                return {
                    ...state,
                    idOfQuantity:newIdOfQuantity
                }

            }
            // 产品第一次加入购物车
            else {
                newIdOfQuantity[action.productId] = 1;
                return {
                    ...state,
                    idOfQuantity:newIdOfQuantity
                }
            }
        case actionTypes.CART_DEL_PRODUCT:
            let count = state.idOfQuantity[action.productId];
            count--;
            let temp = state.idOfQuantity;
            temp[action.productId] = count;
            return {
                ...state,
                idOfQuantity: temp
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                idOfQuantity:{}
            }
        case actionTypes.HISTORY_ADD:
            state.historys.push({[action.time]:action.productsInCart});
            return state;
        default:
            return state
    }
}