import todosReducer from './todos_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todos: todosReducer
});
