window.$l = function(selector) {
  const list = document.querySelectorAll(selector);
  return Array.prototype.slice.call(list, 0);
};
