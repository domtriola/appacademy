import merge from 'lodash/merge';
import { RECEIVE_TODO, RECEIVE_TODOS,
         REMOVE_TODO, UPDATE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TODOS:
      // return merge(nextState, action.todos);
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case REMOVE_TODO:
      delete nextState[action.todo.id];
      return nextState;
    case UPDATE_TODO:
      nextState[action.todo.id].done = !nextState[action.todo.id].done;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
