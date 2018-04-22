/**
 * Created by startcaft on 2018/4/21.
 */


import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from 'antd';

import {clearCart,addCartHistory} from '../actions';

function getProductsInCart(products,idOfQuantity){
    const productsInCart = [];
    products.forEach((ele) => {
        for(let id in idOfQuantity){
            if (parseInt(id,10) === parseInt(ele.id,10) && idOfQuantity[id] !== 0){
                const productInCartObj = {
                    obj:ele,
                    count:idOfQuantity[id]
                }
                productsInCart.push(productInCartObj);
            }
        }
    });
    return productsInCart;
}

/**
 * 购物车 容器组件
 */
class Cart extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visible:false
        }

        this.toogleModal = this.toogleModal.bind(this);
        this.clearCart = this.clearCart.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    toogleModal = () => {
        this.setState({
            visible : !this.state.visible
        })
    }

    clearCart = () => {
        this.props.onClearCart();
    }

    handleOk(){
        const {products,idOfQuantity} = this.props;
        const productsInCart = getProductsInCart(products,idOfQuantity);
        this.props.onAddCartHistory(new Date().getTime(),productsInCart);
        this.props.onClearCart();
        this.setState({
            visible:false
        })

    }

    render(){
        const {products,idOfQuantity} = this.props;
        const productsInCart = getProductsInCart(products,idOfQuantity);
        return (
            <div className="cart-list fl">
                <div className="cart-list-title">
                    <Row>
                        <Col span={8}>
                            商品信息
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={4}>
                            单价
                        </Col>
                        <Col span={4}>
                            数量
                        </Col>
                        <Col span={4}>
                            金额
                        </Col>
                    </Row>
                </div>

                <QueueAnim type={['right', 'left']}>
                    {
                        productsInCart.map(productInCartObj =>
                            <div id={productInCartObj.obj.id} className="cart-list-li" key={'a'+productInCartObj.obj.id}>
                                <Row>
                                    <Col span="3">
                                        <div className="img">
                                            <img src={require('../../assets/image/'+productInCartObj.obj.src)} alt=""/>
                                        </div>
                                    </Col>
                                    <Col span={9}>
                                        <div className="text">
                                            <Link to={'/detail/'+productInCartObj.obj.id}>{productInCartObj.obj.name}</Link>
                                        </div>
                                    </Col>
                                    <Col span={4}>
                                        <div className="text">￥{productInCartObj.obj.price}</div>
                                    </Col>
                                    <Col span={4}>
                                        <div className="text">{productInCartObj.count}</div>
                                    </Col>
                                    <Col span={4}>
                                        <div className="text">￥{productInCartObj.count*productInCartObj.obj.price}</div>
                                    </Col>
                                </Row>
                            </div>
                        )
                    }
                </QueueAnim>

                <div className="total">
                    <div onClick={this.clearCart} className="fl total-clear">
                        清空
                    </div>
                    <div className="fr total-all" onClick={this.toogleModal}>
                        去结算
                    </div>
                    <div className="fr total-font">
                        <span className="total-symbol">&nbsp;￥</span>
                        {
                            productsInCart.reduce((sum,productInCartObj) => {
                                return sum + productInCartObj.obj.price * productInCartObj.count;
                            },0)
                        }
                    </div>
                </div>

                <Modal title="提示框" visible={this.state.visible}
                       okText="确定" cancelText="取消"
                       onOk={this.handleOk} onCancel={this.toogleModal}
                >
                    <h5>确认购买？</h5>
                    <p>（购买后请到购买记录查看）</p>
                </Modal>
            </div>
        )
    }
}

Cart.propTypes = {
    products:PropTypes.array.isRequired,
    idOfQuantity:PropTypes.object.isRequired,
    onClearCart:PropTypes.func.isRequired,
    onAddCartHistory:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.shoppingCart.products,
    idOfQuantity:state.shoppingCart.idOfQuantity
});
const mapDispatchToProps = (dispatch) => {
    return {
        onClearCart:() => {
            dispatch(clearCart());
        },
        onAddCartHistory:(time,productsInCart) => {
            dispatch(addCartHistory(time,productsInCart));
        }
    }
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(Cart)