import * as TodosAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  TodosAPIUtil.requestTodos()
    .then(response => dispatch(receiveTodos(response)))
);

export const createTodo = todo => dispatch => (
  TodosAPIUtil.createTodo(todo)
    .then(response => dispatch(receiveTodo(response)))
);
