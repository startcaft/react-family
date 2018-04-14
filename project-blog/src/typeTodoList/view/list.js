/**
 * Created by startcaft on 2018/4/14.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Collapse, Row, Col, Icon, Button } from 'antd';


/**
 * 备忘录列表，根据传入的状态进行渲染
 */
class List extends Component {
    constructor(props) {
        super(props);

        this.handleDel = this.handleDel.bind(this);
    }

    handleDel(e){
        const delindex = e.target.getAttribute('data-key');
        this.props.onDel(delindex);
    }

    render(){
        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>{this.props.title}</h3>
                </Col>
                <Col span={2}>
                    <Button
                        size="small"
                        shape="circle"
                    >
                        {this.props.items.length}
                    </Button>
                </Col>
            </Row>
        );

        return(
            <main>
                <Collapse style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                    <Panel header={header}>
                        <ul>
                            {
                                this.props.items.map((item, i) => {
                                        return (
                                            <li
                                                key={i}
                                                style={{
                                                    opacity: this.props.opacity
                                                }}
                                            ><Row>
                                                <Col span={3}>
                                                    <input
                                                        type="checkbox"
                                                        checked={true}
                                                        // onChange={this.handleToDoing}
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

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    // onDoingToDone: PropTypes.func.isRequired,
    // onDoingToTodo: PropTypes.func.isRequired,
    // onDoneToDoing: PropTypes.func.isRequired,
    // onTodoToDoing: PropTypes.func.isRequired,
    // onDel: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    opacity:PropTypes.number,
    onDel: PropTypes.func.isRequired
};

export default List;