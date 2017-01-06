import React from 'react';

const types = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input type="text" value={this.state.name} />
        </label>

        <label>Image url
          <input type="text" value={this.state.image_url} />
        </label>

        <label>Attack
          <input type="number" value={this.state.attack} />
        </label>

        <label>Defense
          <input type="number" value={this.state.defense} />
        </label>

        <label>Type
          <select>
            {types.map((type, i) =>
              <option key={i} value={type}>{type}</option>)}
          </select>
        </label>

        <label>Move 1
            <input type="text" value={this.state.move1} />
        </label>

        <label>Move 2
            <input type="text" value={this.state.move2} />
        </label>

      </form>
    );
  }
}
