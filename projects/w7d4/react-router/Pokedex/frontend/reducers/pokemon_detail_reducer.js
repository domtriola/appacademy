import merge from 'lodash/merge';
import { RECEIVE_POKEMON_DETAIL } from '../actions/pokemon_actions';

const pokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POKEMON_DETAIL:
      return action.poke;
    default:
      return nextState;
  }
};

export default pokemonDetailReducer;
