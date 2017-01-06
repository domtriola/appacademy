import React from 'react';
import PokemonIndexItem from './pokemon_index_item.jsx';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pokemon.map((mon, i) => (
            <PokemonIndexItem key={i} poke={mon} />))}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default PokemonIndex;
