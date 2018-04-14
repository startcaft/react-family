import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import { connect } from 'react-redux';
import { actions } from '../../todo/index';

class AllMemosRoute extends Component {
    render(){
        const { todolist } = this.props;
        const doings = todolist.filter((item) => {
            return item.doing
        });

        const todos = todolist.filter((item) => {
            return item.istodo
        });

        const dones = todolist.filter((item) => {
            return item.done
        });

        return (
            <div>
                {/*新建列表*/}
                <List title={"新建事项"}  items={todos} onDel={this.props.deleteTodo}/>
                <List title={"正在进行"}  items={doings} opacity={0.7} onDel={this.props.deleteTodo}/>
                <List title={"已完成"} items={dones} opacity={0.4} onDel={this.props.deleteTodo}/>
                {/*<ListTodoMemos */}
                    {/*todos = {todos}*/}
                    {/*onDel={index => dispatch(actions.deleteTodo(index))}*/}
                    {/*onTodoToDoing={index => dispatch(actions.changeTodoToDoing(index))}*/}
                {/*/>*/}
                {/*<ListDoingMemos*/}
                    {/*todolist={todos}*/}
                    {/*onDel={index => dispatch(actions.deleteTodo(index))}*/}
                    {/*onDoingToDone={index => dispatch(actions.changeDoingToDone(index))}*/}
                    {/*onDoingToTodo={index => dispatch(actions.changeDoingToTodo(index))}*/}
                {/*/>*/}
                {/*<ListDoneMemos*/}
                    {/*todolist={todos}*/}
                    {/*onDel={index => dispatch(actions.deleteTodo(index))}*/}
                    {/*onDoneToDoing={index => dispatch(actions.changeDoneToDoing(index))}*/}
                {/*/>*/}

            </div>
        )
    }
}

AllMemosRoute.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
};
const mapStateToProps = (state) => {
    return { todolist: state.todos };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo:(index) => {
            dispatch(actions.deleteTodo(index))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllMemosRoute);
