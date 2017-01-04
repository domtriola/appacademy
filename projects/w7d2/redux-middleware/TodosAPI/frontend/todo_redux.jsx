import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('content')
  );
});
