import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // TODO: testing
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// TODO: testing
import { login } from './actions/session_actions';
window.login = login;
