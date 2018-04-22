/**
 * 开始请求 product 的 action 定义
 * @type {string}
 */
export const PRODUCT_REQUEST_START = 'product/product_request_start';
/**
 * 请求 product 成功的 action 定义
 * @type {string}
 */
export const PRODUCT_REQUEST_SUCCESS = 'product/product_request_success';
/**
 * 请求 product 失败的 action 定义
 * @type {string}
 */
export const PRODUCT_REQUEST_FAIL = 'product/product_request_fail';


/**
 * 添加 product 到购物车的 action 定义
 * @type {string}
 */
export const CART_ADD_PRODUCT = 'cart/add_product';
/**
 * 从购物车删除 product 的 action 定义
 * @type {string}
 */
export const CART_DEL_PRODUCT = 'cart/del_product';
/**
 * 清空购物车 的 action 定义
 * @type {string}
 */
export const CLEAR_CART = 'cart/clear_product';

/**
 * 添加购物车数据到历史数据的 action 定义
 * @type {string}
 */
export const HISTORY_ADD = 'history/add';