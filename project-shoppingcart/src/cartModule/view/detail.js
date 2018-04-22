/**
 * Created by startcaft on 2018/4/21.
 */

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import {addProductInCart,delProductInCart} from '../actions';

class Detail extends React.Component{
    constructor(props){
        super(props);

        this.handleAddCart = this.handleAddCart.bind(this);
        this.handleDelFormCart = this.handleDelFormCart.bind(this);
    }

    handleAddCart(productId){
        this.props.onAdd(productId);
    }
    handleDelFormCart(productId){
        this.props.onDel(productId);
    }

    render(){
        const currentId = this.props.match.params.productId;
        const tempArray = this.props.products.filter(function(ele){
            if(parseInt(ele.id,10) === parseInt(currentId,10)){
                return ele;
            }
        });
        const product = tempArray[0];

        let Addtoggle;
        const total = this.props.idOfQuantity[currentId];
        if(total === undefined || total === 0){
            Addtoggle = <a href="#" onClick={() => this.handleAddCart(currentId)} className="buy">加入购物车</a>
        }
        else {
            Addtoggle = <div className="detail-cart">
                <a href="#" onClick={() => this.handleAddCart(currentId)} className="toggle-add">+</a>
                <div className="toggle-num">{this.props.idOfQuantity[currentId]}</div>
                <a href="#" onClick={() => this.handleDelFormCart(currentId)} className="toggle-add">-</a>
            </div>
        }

        return (
            <div className="detail fl">
                <div className="detail-header">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="detail-content clear">
                    <div className="fl content-right">
                        <div className="name">
                            {product.name}
                        </div>
                        <div className="mashu">
                            码数:
                            {product.mashu.map(num =>
                                <span className="num" key={num+'1'}>{num}</span>
                            )}
                        </div>
                        <div className="toggle">
                            {Addtoggle}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Detail.propTypes = {
    onAdd:PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired,
    products:PropTypes.array.isRequired,
    idOfQuantity:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        products:state.shoppingCart.products,
        idOfQuantity:state.shoppingCart.idOfQuantity
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (productId) => {
            dispatch(addProductInCart(productId));
        },
        onDel: (productId) => {
            dispatch(delProductInCart(productId));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Detail);