import { connect } from 'react-redux';
import { requestPokemonDetail } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail.jsx';

const mapStateToProps = state => ({
  poke: state.poke
});

const mapDispatchToProps = dispatch => ({
  requestPokemonDetail: (id) => dispatch(requestPokemonDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
