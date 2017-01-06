import * as APIUtil from '../util/api_util.js';

export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const receivePokemonDetail = poke => ({
  type: RECEIVE_POKEMON_DETAIL,
  poke
});

export const requestPokemonDetail = (id) => (dispatch) => {
  return APIUtil.fetchPokemonDetail(id).
    then(pokemon => dispatch(receivePokemonDetail(pokemon)));
};

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().
    then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const createPokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon).
    then(poke => dispatch(receivePokemon(poke)));
};

window.createPokemon = createPokemon;
// createPokemon({ image_url: "url", name: "first", poke_type: "fire", attack: 1, defense: 1, moves: [], items: [] });
