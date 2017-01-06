import values from 'lodash/values';

export const selectAllPokemon = state => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, id) => {
  // debugger;
  const items = state.poke.items;
  return items.find(item => item.id === parseInt(id));
};
