import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
import { connect } from 'react-redux';
import { actions } from '../../todo/index';

class DoingList extends Component {
    render(){
        const { todolist } = this.props;

        const doings = todolist.filter((item) => {
            return item.doing
        });

        return (
            <div>
                <List title={"正在进行"}  items={doings} onDel={this.props.deleteTodo}/>
            </div>
        )
    }
}

DoingList.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(DoingList);
