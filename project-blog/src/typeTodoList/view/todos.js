/**
 * Created by startcaft on 2018/4/15.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../../todo/index';
import * as Types from '../../constant';
import { Collapse, Row, Col, Icon, Button } from 'antd';
import InputItem from './inputItem';

/**
 * 备忘录列表组建，根据传递进来的 type 进行过滤数据和渲染
 */
class Todos extends Component {
    constructor(props){
        super(props);

        this.handleToTodo = this.handleToTodo.bind(this);
    }

    handleToTodo(e){
        const changeIndex = e.target.getAttribute('data-key');
        this.props.changeDoingToTodo(changeIndex);
    }

    render(){
        const {type,todolist} = this.props;

        const {typeTodos,title,opacity} = filterTodoList(type,todolist);


        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>{title}</h3>
                </Col>
                <Col span={2}>
                    <Button
                        size="small"
                        shape="circle"
                    >
                        {typeTodos.length}
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
                                typeTodos.map((item, i) => {
                                    return (
                                        <li
                                            key={i}
                                            style={{
                                                opacity: opacity
                                            }}
                                        >
                                            <InputItem item={item} index={i} onDel={this.props.deleteTodo}
                                                       onTodoToDoing={this.props.changeTodoToDoing}
                                                        onDoingToDone={this.props.changeDoingToDone}/>
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

// 私有函数
function filterTodoList(type,todolist){
    switch (type){
        case Types.NEW:
            return{
                typeTodos:todolist.filter((item) => {
                    return item.istodo;
                }),
                title:'新建事项',
                opacity: 1
            }
        case Types.DONE:
            return{
                typeTodos:todolist.filter((item) => {
                    return item.done;
                }),
                title:'已完成',
                opacity: 0.4
            }
        case Types.DOING:
            return{
                typeTodos:todolist.filter((item) => {
                    return item.doing;
                }),
                title:'正在进行',
                opacity: 0.7
            }
        default:
            throw new Error('不被支持的备忘录类型');
    }
}

/**
 * 组件属性验证
 * @type {{todolist: *}}
 */
Todos.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
    type: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeTodoToDoing: PropTypes.func.isRequired,
    changeDoingToDone: PropTypes.func.isRequired
};

/**
 * 将 state 状态转换成组件可以接受的 props
 * @param state
 * @returns {{todolist: (App.propTypes.todos|{todo, istodo, doing, done}|(function(*=, *))|*)}}
 */
const mapStateToProps = (state) => {
    return {
        todolist: state.todos
    }
}

/**
 * 将 dispatch 转换成组件可以接受的 props
 * @param dispatch
 * @returns {{}}
 */
const mapDispatcToProps = (dispatch) => {
    return {
        deleteTodo:(index) => {
            dispatch(actions.deleteTodo(index));
        },
        changeTodoToDoing:(index) => {
            dispatch(actions.changeTodoToDoing(index));
        },
        changeDoingToDone:(index) => {
            dispatch(actions.changeDoingToDone(index));
        }
    }
}
export default connect(mapStateToProps,mapDispatcToProps)(Todos);
