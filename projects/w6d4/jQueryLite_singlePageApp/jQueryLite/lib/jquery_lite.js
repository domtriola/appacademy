/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

	window.$l = function(arg) {
	  if (arg instanceof HTMLElement)
	    return new DOMNodeCollection([arg]);

	  let list = document.querySelectorAll(arg);
	  list = Array.prototype.slice.call(list, 0);
	  return new DOMNodeCollection(list);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(HTMLElements) {
	    this.HTMLElements = HTMLElements;
	  }

	  html(innerHTML) {
	    if (innerHTML === undefined) {
	      return this.HTMLElements[0].innerHTML;
	    } else {
	      this.HTMLElements.forEach(el => {
	        el.innerHTML = innerHTML;
	      });
	    }
	  }

	  empty() {
	    this.HTMLElements.forEach(el => {
	      el.innerHTML = "";
	    });
	  }

	  append(item) {
	    if (typeof item === "string") {
	      this.innerHTML = item;
	    } else if (item instanceof HTMLElement) {
	      const outerHTML = item.outerHTML;
	      this.HTMLElements.forEach(el => {
	        el.innerHTML += item.outerHTML;
	      });
	    } else if (item instanceof DOMNodeCollection) {
	      const htmlItems = Array.prototype.slice.call(item.HTMLElements, 0);
	      const totalHTML = htmlItems.reduce((accum, el) => {
	        return accum + el.outerHTML;
	      }, "");
	      this.HTMLElements.forEach(el => {
	        el.innerHTML += totalHTML;
	      });
	    }
	  }

	  attr(attribute, value) {
	    if (value === undefined)
	      return this.HTMLElements[0].getAttribute(attribute);
	    else
	      this.HTMLElements.forEach(el => el.setAttribute(attribute, value));
	  }

	  addClass(className) {
	    this.HTMLElements.forEach(el => el.classList.add(className));
	  }

	  removeClass(className) {
	    this.HTMLElements.forEach(el => el.classList.remove(className));
	  }

	  children() {
	    let children = [];
	    this.HTMLElements.forEach(node => {
	      let nodeChildren = Array.prototype.slice.call(node.children, 0);
	      children = children.concat(nodeChildren);
	    });

	    return new DOMNodeCollection(children);
	  }

	  parent() {
	    const parents = [];
	    this.HTMLElements.forEach(node => {
	      if (parents.indexOf(node.parentNode) === -1)
	        parents.push(node.parentNode);
	    });

	    return new DOMNodeCollection(parents);
	  }

	  find(selector) {
	    let children = [];
	    this.HTMLElements.forEach(node => {
	      let found = Array.prototype.slice
	                       .call(node.querySelectorAll(selector), 0);
	      children = children.concat(found);
	    });

	    return new DOMNodeCollection(children);
	  }

	  remove() {
	    this.HTMLElements.forEach(node => node.remove());
	  }
	}

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);