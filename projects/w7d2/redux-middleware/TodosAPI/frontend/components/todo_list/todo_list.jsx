import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, idx) => (
            <TodoListItem
              todo={todo}
              removeTodo={this.props.removeTodo}
              updateTodo={this.props.updateTodo}
              key={idx}/>
            )
          )}
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    );
  }
}

export default TodoList;
