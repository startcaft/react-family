/**
 * Created by startcaft on 2018/4/21.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';

import { Spin, Alert } from 'antd';
import * as actions from '../actions'

/**
 * home 容器组建
 */
class Home extends React.Component {
    constructor(props){
        super(props);
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount(){
        // 异步请求数据
        this.props.dispatch(actions.fetchProducts());
    }
    loadData(){
        this.props.onLoad();
    }
    render(){
        const {isLoading,errorMsg,products} = this.props;
        return (
            <div className="container fl main-index">
                {
                    isLoading ?
                        <Spin tip="加载中...">
                            <Alert
                                message="加载数据"
                                description="正在为您加载数据,请稍后."
                                type="info"
                            />
                        </Spin> :
                        (
                            errorMsg ? errorMsg :
                                <QueueAnim>
                                    {
                                        products.map(product =>
                                            <div id={product.id} className="product-list fl" key={'a'+product.id}>
                                                <img src={require('../../assets/image/' + product.src)} alt="" />
                                                <p>￥:{product.price}</p>
                                                <Link to={'/detail/'+product.id}>{product.name}</Link>
                                            </div>
                                        )
                                    }
                                </QueueAnim>
                        )
                }
            </div>
        )
    }
}

Home.propTypes = {
    isLoading:PropTypes.bool.isRequired,
    products:PropTypes.arrayOf(PropTypes.object).isRequired,
    errorMsg:PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        isLoading:state.shoppingCart.isLoading,
        products:state.shoppingCart.products,
        errorMsg:state.shoppingCart.errorMsg
    }
}


export default connect(mapStateToProps)(Home);
