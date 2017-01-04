import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import { applyMiddleware } from 'redux';
import thunkMid from '../middleware/thunk.js';

const configureStore = () => createStore(rootReducer, applyMiddleware(thunkMid));

export default configureStore;
