const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg) {
  if (arg instanceof HTMLElement)
    return new DOMNodeCollection([arg]);

  let list = document.querySelectorAll(arg);
  list = Array.prototype.slice.call(list, 0);
  return new DOMNodeCollection(list);
};
