import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import { connect } from 'react-redux';
import { actions } from '../../todo/index';

class DoneList extends Component {
    render(){
        const { todolist } = this.props;

        const dones = todolist.filter((item) => {
            return item.done
        });

        return (
            <div>
                <List title={"已完成"}  items={dones} onDel={this.props.deleteTodo}/>
            </div>
        )
    }
}

DoneList.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(DoneList);
