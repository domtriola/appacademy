// Your widgets.jsx should look have DOMContentLoaded listener that calls
// ReactDOM.render() with a Root component and a main DOM element as the hook.

import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widget />, document.getElementById("main"));
});
