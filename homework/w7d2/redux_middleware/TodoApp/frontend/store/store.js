import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';

// const addLoggingToDispatch = store => next => action => {
//   console.log("Action receive: ", action);
//   console.log("State pre-dispatch: ", store.getState());
//
//   let result = next(action);
//
//   console.log("State post-dispatch: ", store.getState());
//
//   return result;
// };

const configureStore = (preloadedState = {}) => {
  // const store = createStore(RootReducer,
  //                           preloadedState,
  //                           applyMiddleware(addLoggingToDispatch));
  const store = createStore(RootReducer,
                            preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
