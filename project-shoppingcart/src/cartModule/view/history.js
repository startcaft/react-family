/**
 * Created by startcaft on 2018/4/22.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class History extends React.Component{
    constructor(props){
        super(props);
    }

    getLocalTime(ns){
        return new Date(parseInt(ns,10)).toLocaleString().replace(/:\d{1,2}$/,' ')
    }

    render(){

        const { historys } = this.props;

        const list = () => {
            const lis = []
            for(let i in historys){
                for(let p in historys[i]){
                    const productsInCartArray = historys[i][p];
                    const mlis = [];
                    productsInCartArray.forEach((ele) => {
                        mlis.push(
                            <div id={ele.obj.id} className="cart-list-li" key={'a'+ele.obj.id}>
                                <Row>
                                    <Col span={3}>
                                        <div className="img">
                                            <img src={require('../../assets/image/'+ele.obj.src)} alt=""/>
                                        </div>
                                    </Col>
                                    <Col span={9}>
                                        <div className="text">
                                            <Link to={'/detail/'+ele.obj.id}>{ele.obj.name}</Link>
                                        </div>
                                    </Col>
                                    <Col span={4}>
                                        <div className="text">￥{ele.obj.price}</div>
                                    </Col>
                                    <Col span={4}>
                                        <div className="text">{ele.count}</div>
                                    </Col>
                                    <Col span={4}>
                                        <div className="text">￥{ele.count*ele.obj.price}</div>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })
                    lis.push(
                        <div key={'item'+p}>
                            <p>{this.getLocalTime(p)}</p>
                            {mlis}
                        </div>
                    )
                }
            }
            return lis;
        }

        return(
            <div className="plan fl">
                {list()}
            </div>
        )
    }
}

History.propsTypes = {
    historys:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    historys:state.shoppingCart.historys
});

export default connect(
    mapStateToProps
)(History)