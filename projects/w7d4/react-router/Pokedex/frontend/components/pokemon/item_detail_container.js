import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectPokemonItem(state, ownProps.params.itemId)
  };
};

export default connect(
  mapStateToProps
)(ItemDetail);
