import React from 'react';
import { Link } from 'react-router';

const PokemonDetailItem = ({id, item}) => (
  <li>
    <Link to={`/pokemon/${id}/item/${item.id}`}>
      <img src={item.image_url} />
    </Link>
  </li>
);

export default PokemonDetailItem;
