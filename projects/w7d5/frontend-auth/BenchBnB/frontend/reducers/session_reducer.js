import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user, errors: [] };
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };
    default:
      return nextState;
  }
};

export default SessionReducer;
