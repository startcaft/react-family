import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Collapse, Row, Col, Icon, Button } from 'antd';


class ListTodoMemos extends Component {
    constructor(props) {
        super(props);

        this.handleDel = this.handleDel.bind(this);
        this.handleToDoing = this.handleToDoing.bind(this);
    }
     /*
     * @method  handleDel 删除事项
     */
    handleDel(e) {
        const delindex = e.target.getAttribute('data-key');
        this.props.onDel(delindex);
    }
    /*
     * @method  handleToDoing 改变状态todog->doing
     */
    handleToDoing(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onTodoToDoing(changeIndex);
    }
    render(){
        let number = 0;
        this.props.todos.map((item) => {
            if (item.istodo) {
                number += 1;
            }
            return true;
        });

        const Panel = Collapse.Panel;
        return (
            <main>
                <Collapse style={{margin:'o auto',maxWidth:'800px',width:'100%'}}>
                    <Panel header={
                        <Row>
                            <Col span={22}>
                                <h3>新建事项</h3>
                            </Col>
                            <Col span={2}>
                                <Button
                                    size="small"
                                    shape="circle"
                                >{number}</Button>
                            </Col>
                        </Row>
                    }>
                        <ul>
                            {
                                this.props.todos.map((item, i) => {
                                    if (item.istodo) {
                                        return (
                                            <li
                                                key={i}
                                                style={{
                                                    opacity: item.istodo
                                                    ? '0.7'
                                                    : '',
                                                }}
                                            ><Row>
                                                <Col span={3}>
                                                    <input
                                                        type="checkbox"
                                                        checked={!item.istodo}
                                                        onChange={this.handleToDoing}
                                                        data-key={i}
                                                    />
                                                </Col>
                                                <Col span={20}>
                                                    <p>{item.todo}</p>
                                                </Col>
                                                <Col span={1}>
                                                    <Icon
                                                        type="close-circle"
                                                        data-key={i}
                                                        style={{
                                                            fontSize: '20px',
                                                        }}
                                                        onClick={this.handleDel}
                                                    />
                                                </Col>
                                            </Row>
                                            </li>
                                        );
                                    }
                                    return true;
                                })
                            }
                        </ul>
                    </Panel>
                </Collapse>
            </main>
        )
    }
}


ListTodoMemos.propTypes = {
    onTodoToDoing: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
};

export default ListTodoMemos;