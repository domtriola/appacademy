import merge from 'lodash/merge';
import { RECEIVE_ALL_POKEMON,
         RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge(nextState, action.pokemon);
    case RECEIVE_POKEMON:
      debugger;
      return merge(nextState, action.pokemon);
    default:
      return nextState;
  }
};

export default pokemonReducer;
