import React from 'react';
import TodoList from './todoList.jsx';
import NewTodo from './newTodo.jsx';
import data from '../data.js';

/*
  I put the functions in here so that when something is changed in the newToDo it will be updated here and the correct array will be passed to the todoList. I think everything is bound and distributed correctly but I can't test since I don't have the file :(

  I also changed the data to the data.js file which appears to work at least from this end... again, no way to tell without running it.

  thoughts: This may be a tad too advanced for them? There's a lot of prop passing and function binding. Should we simplify?
*/

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data,
      newTodo: ''
    }
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    var allTodos = this.state.todos
    if (this.state.newTodo.length > 0) {
      allTodos.push(this.state.newTodo)
    }
    this.setState({
      todos: allTodos
    })
  }

  render() {
    return (
      <div>
        <NewTodo todos={this.state.todos} handleChange={this.handleChange.bind(this)} handleClick={this.handleClick.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default Todo;
