import React, { Component } from 'react';
import './app.less';

import { view as HeaderView } from './todo/index';
import { view as NavBar } from './navBar/index';

import { actions as todoActions } from './todo/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AllMemos from './typeTodoList/view/allMemos';
import TodoList from './typeTodoList/view/todoList';
import DoingList from './typeTodoList/view/doingList';
import DoneList from './typeTodoList/view/doneList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 0,
    };
  }
  render() {
    const { addNewTodo,searchTodo,todos } = this.props;
    const allMemos = todos.length;
    let [todoNumber, doingNumber, doneNumber] = [0, 0, 0];
    todos.forEach((item) => {
        if (item.istodo) {
            todoNumber += 1;
        } else if (item.doing) {
            doingNumber += 1;
        } else {
            doneNumber += 1;
        }
    });
    return (
        <Router>
          <div>
            <HeaderView
                onAdd={(text) => addNewTodo(text)}
                onSearch={text => searchTodo(text)}
                todolist={todos}
            />
            <NavBar
                allMemos={allMemos}
                todoNumber={todoNumber}
                doingNumber={doingNumber}
                doneNumber={doneNumber}
            />
            <Switch>
                <Route exact path="/" component={AllMemos} />
                <Route path="/todo" component={TodoList} />
                <Route path="/doing" component={DoingList} />
                <Route path="/done" component={DoneList} />
            </Switch>
          </div>
        </Router>
    );
  }
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      todo: PropTypes.string.isRequired,
      istodo: PropTypes.bool.isRequired,
      doing: PropTypes.bool.isRequired,
      done: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  addNewTodo:PropTypes.func.isRequired,
  searchTodo:PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addNewTodo:(text) => {
        dispatch(todoActions.addTodo(text));
      },
      searchTodo:(text) => {
        dispatch(todoActions.search(text));
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
