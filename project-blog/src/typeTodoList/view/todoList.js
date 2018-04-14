import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import { connect } from 'react-redux';
import { actions } from '../../todo/index';

class TodoList extends Component {
    render(){
        const { todolist } = this.props;

        const todos = todolist.filter((item) => {
            return item.istodo
        });

        return (
            <div>
                <List title={"新建事项"}  items={todos} onDel={this.props.deleteTodo}/>
            </div>
        )
    }
}

TodoList.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
