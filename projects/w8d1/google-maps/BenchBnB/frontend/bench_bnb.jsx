import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else
    store = configureStore();

  // TODO: testing
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// TODO: testing
import * as APIUtil from './util/benches_api_util';
window.fetchBenches = APIUtil.fetchBenches;
window.createBench = APIUtil.createBench;
