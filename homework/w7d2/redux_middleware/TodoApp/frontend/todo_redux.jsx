import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const addLoggingToDispatch = store => {
    const dispatch = store.dispatch;
    return action => {
      console.log(store.getState());
      console.log(action);

      dispatch(action);

      console.log(store.getState());
    };
  };

  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const initStore = configureStore(preloadedState);
  initStore.dispatch = addLoggingToDispatch(initStore);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={initStore} />, root);
});
