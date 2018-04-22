/**
 * Created by startcaft on 2018/4/21.
 */

import * as actionTypes from './actionTypes';

export const addCartHistory = (time,productsInCart) => {
    return {
        type:actionTypes.HISTORY_ADD,
        time:time,
        productsInCart:productsInCart
    }
}


export const addProductInCart = (productId) => {
    return {
        type:actionTypes.CART_ADD_PRODUCT,
        productId
    }
}

export const delProductInCart = (productId) => {
    return {
        type:actionTypes.CART_DEL_PRODUCT,
        productId
    }
}

export const clearCart = () => {
    return {
        type:actionTypes.CLEAR_CART
    }
}


function productRequestStart(){
    return {
        type:actionTypes.PRODUCT_REQUEST_START
    }
}
function productRequestSuccess(products) {
    return {
        type:actionTypes.PRODUCT_REQUEST_SUCCESS,
        products
    }
}
function productRequestFail(error){
    return {
        type:actionTypes.PRODUCT_REQUEST_FAIL,
        error
    }
}

export const fetchProducts = () => (dispatch) => {
    // 发起请求
    dispatch(productRequestStart());

    return fetch('http://localhost:2333/products')
        .then((res) => {
            if(res.status !== 200){
                throw new Error('Fail to get response with status ' + res.status);
            }
            return res.json()
        })
        .then((res) => {
            dispatch(productRequestSuccess(res));
        })
        .catch((error) => {
            dispatch(productRequestFail(error));
        })
}