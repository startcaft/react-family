import { Row, Col } from 'antd';
import React, { Component } from 'react';
import NavLink from './typeLink';


class NavBar extends Component {
    render(){
        return (
            <div className="navigation">
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink to="/">
                            全部&nbsp;
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/todo">
                            新建事项&nbsp;
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/doing">
                            正在进行
                        </NavLink>
                    </Col>
                    <Col span={6}>
                        <NavLink to="/done">
                            已完成
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NavBar;