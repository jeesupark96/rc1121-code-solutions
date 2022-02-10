import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos: todos }))
      .catch(console.error);
  }

  addTodo(newTodo) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };
    fetch('/api/todos', req)
      .then(res => res.json())
      .then(todo => {
        const allTodos = this.state.todos.concat(todo);
        this.setState({ todos: allTodos });
      });

  }

  toggleCompleted(todoId) {
    const oldTodo = this.state.todos.find(todo => {
      return todo.todoId === todoId;
    });
    const req = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: !oldTodo.isCompleted })
    };
    fetch(`/api/todos/${todoId}`, req)
      .then(res => res.json())
      .then(data => {
        const results = this.state.todos.map(original => {
          return original.todoId === data.todoId
            ? data
            : original;
        });
        this.setState({ todos: results });
      });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
