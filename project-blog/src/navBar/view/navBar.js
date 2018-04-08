import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavLink from './typeLink';


class NavBar extends Component {
    render(){
        return (
            <div className="navigation">
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink to="/">
                            全部&nbsp;
                            <span>{this.props.allMemos}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/todo">
                            新建事项&nbsp;
                            <span>{this.props.todoNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/doing">
                            正在进行&nbsp;
                            <span>{this.props.doingNumber}</span>
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/done">
                            已完成&nbsp;
                            <span>{this.props.doneNumber}</span>
                        </NavLink>
                    </Col>
                </Row>
                {/* <Route exact={true} path="/" Component={}/> */}
            </div>
        )
    }
}

export default NavBar;