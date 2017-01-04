import { connect } from 'react-redux';
import { createTodo, removeTodo,
         updateTodo, fetchTodos } from '../../actions/todo_actions';
import TodoList from './todo_list.jsx';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
