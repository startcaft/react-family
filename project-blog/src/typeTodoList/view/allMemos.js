import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListTodoMemos from './listTodoMemos';
import {actions} from '../../todo/index'


class AllMemosRoute extends Component {
    render(){
        const { dispatch, todos } = this.props;
        return (
            <div>
                <ListTodoMemos 
                    todos = {todos}
                    onDel={index => dispatch(actions.deleteTodo(index))}
                    onTodoToDoing={index => dispatch(actions.changeTodoToDoing(index))}
                />
            </div>
        )
    }
}

AllMemosRoute.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
};

const mapStateToProps = (state) => {
    return { todos: state.todos };
};

export default connect(mapStateToProps)(AllMemosRoute);