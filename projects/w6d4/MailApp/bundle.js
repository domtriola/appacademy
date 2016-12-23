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

	const Router = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded", () => {
	  initializeButtons();
	  initializeRouter();
	});

	function initializeButtons() {
	  const sidebarItems = document.querySelectorAll(".sidebar-nav li");
	  sidebarItems.forEach(item => {
	    item.addEventListener("click", (e) => {
	      let innerText = e.currentTarget.innerText.toLowerCase();
	      window.location.hash = innerText;
	    });
	  });
	}

	function initializeRouter() {
	  const content = document.querySelector('.content');
	  const router = new Router(content);
	  router.start();
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node) {
	    this.node = node;
	  }

	  start() {
	    this.render();
	    window.onhashchange = () => this.render();
	  }

	  render() {
	    this.node.innerHTML = "";
	    let newNode = document.createElement("p");
	    newNode.innerHTML = this.activeRoute();
	    this.node.append(newNode);
	  }

	  activeRoute() {
	    let hashFragment = window.location.hash;
	    return hashFragment.slice(1);
	  }
	}

	module.exports = Router;


/***/ }
/******/ ]);