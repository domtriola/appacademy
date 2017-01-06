import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { thunk } from '../middleware/thunk';
import { applyMiddleware } from 'redux';

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
