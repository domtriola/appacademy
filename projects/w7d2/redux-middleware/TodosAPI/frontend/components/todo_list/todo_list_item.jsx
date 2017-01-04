import React from 'react';

const TodoListItem = ({ todo, removeTodo, updateTodo }) => (
  <li>
    Title: {todo.title}
    <br />
    Body: {todo.body}
    <br />
    <button onClick={() => updateTodo(todo)}>
      {todo.done ? "Undo" : "Done"}
    </button>
    <br />
    <button onClick={() => removeTodo(todo)}>Delete</button>
  </li>
);

export default TodoListItem;
