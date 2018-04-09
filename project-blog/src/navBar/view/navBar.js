import { Row, Col } from 'antd';
import React, { Component } from 'react';
import TypeLink from './typeLink';

class NavBar extends Component {
    render(){
        return (
            <div className="navigation">
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <TypeLink to="/">
                            全部&nbsp;
                            <span>{this.props.allMemos}</span>
                        </TypeLink>
                    </Col>
                    <Col span={6}>
                        <TypeLink to="/todo">
                            新建事项&nbsp;
                            <span>{this.props.todoNumber}</span>
                        </TypeLink>
                    </Col>
                    <Col span={6}>
                        <TypeLink to="/doing">
                            正在进行&nbsp;
                            <span>{this.props.doingNumber}</span>
                        </TypeLink>
                    </Col>
                    <Col span={6}>
                        <TypeLink to="/done">
                            已完成&nbsp;
                            <span>{this.props.doneNumber}</span>
                        </TypeLink>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NavBar;