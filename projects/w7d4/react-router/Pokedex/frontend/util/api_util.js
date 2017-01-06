export const fetchAllPokemon = () => (
  $.ajax({type: "GET", url: "api/pokemon"})
);

export const fetchPokemonDetail = (id) => (
  $.ajax({type: "GET", url: `api/pokemon/${id}`})
);

export const createPokemon = (pokemon) => {
  pokemon = { pokemon: pokemon };
  return $.ajax({type: "POST", url: "api/pokemon", data: pokemon});
};
