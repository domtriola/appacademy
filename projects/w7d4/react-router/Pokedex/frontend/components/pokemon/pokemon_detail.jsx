import React from 'react';
import PokemonDetailItem from './pokemon_detail_item.jsx';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemonDetail(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id)
      this.props.requestPokemonDetail(newProps.params.id);
  }

  render() {
    let moves;
    if (this.props.poke.moves) {
      moves =
        <li>Moves:
          <ul>
            {this.props.poke.moves.map((move, idx) =>
              <li key={idx}>{move}</li>)}
          </ul>
        </li>;
    }
    let items;
    if (this.props.poke.items) {
      items =
        <li>Items:
          <ul>
            {this.props.poke.items.map((item, idx) =>
            <PokemonDetailItem key={idx}
                               id={this.props.poke.id}
                               item={item} /> )}
          </ul>
        </li>;
    }
    return (
      <div>
        <h1>{this.props.poke.name}</h1>
        <img src={this.props.poke.image_url} />
        <ul>
          <li>Attack: {this.props.poke.attack}</li>
          <li>Defense: {this.props.poke.defense}</li>
          <li>Type: {this.props.poke.poke_type}</li>
          {moves}
          {items}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default PokemonDetail;

// <li>Items:
//   <ul>
//     {this.props.poke.items.map((item, idx) =>
//       <Item item={item} />)}
//   </ul>
// </li>
