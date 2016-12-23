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
	const Inbox = __webpack_require__(4);
	const Sent = __webpack_require__(5);

	document.addEventListener("DOMContentLoaded", () => {
	  initializeButtons();
	  initializeRouter();
	  location.hash = "#inbox";
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
	  const router = new Router(content, routes);
	  router.start();
	}

	const routes = {
	  inbox: Inbox,
	  sent: Sent
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start() {
	    this.render();
	    window.onhashchange = () => this.render();
	  }

	  render() {
	    let component = this.activeRoute();

	    this.node.innerHTML = "";
	    if (component !== undefined)
	      this.node.appendChild(component.render());
	  }

	  activeRoute() {
	    let hashFragment = window.location.hash;
	    return this.routes[hashFragment.slice(1)];
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	const messages = {
	  sent: [
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"}
	  ],

	  inbox: [
	    {from: "grandma@mail.com",
	     subject: "Fwd: Fwd: Fwd: Check this out",
	     body: "Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	    {from: "person@mail.com",
	     subject: "Questionnaire",
	     body: "Take this free quiz win $1000 dollars"}
	  ]
	};

	const MessageStore = {
	  getInboxMessages: function() {
	    return messages.inbox;
	  },

	  getSentMessages: function() {
	    return messages.sent;
	  }
	};

	module.exports = MessageStore;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	const Inbox = {
	  render: function() {
	    const container = document.createElement('ul');
	    container.className = "messages";

	    const messages = MessageStore.getInboxMessages();
	    messages.forEach(message => {
	      let node = this.renderMessage(message);
	      container.appendChild(node);
	    });

	    return container;
	  },

	  renderMessage: function(message) {
	    const messageNode = document.createElement('li');
	    messageNode.className = "message";
	    messageNode.innerHTML =
	      `<span class="from">${message.from}</span>
	       <span class="subject">${message.subject}</span>
	       <span class="body">${message.body}</span>`;

	    return messageNode;
	  }
	};

	module.exports = Inbox;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

	const Sent = {
	  render: function() {
	    const container = document.createElement('ul');
	    container.className = "messages";

	    const messages = MessageStore.getSentMessages();
	    messages.forEach(message => {
	      let node = this.renderMessage(message);
	      container.appendChild(node);
	    });

	    return container;
	  },

	  renderMessage: function(message) {
	    const messageNode = document.createElement('li');
	    messageNode.className = "message";
	    messageNode.innerHTML =
	      `<span class="to">To: ${message.to}</span>
	       <span class="subject">${message.subject}</span>
	       <span class="body">${message.body}</span>`;

	    return messageNode;
	  }
	};

	module.exports = Sent;


/***/ }
/******/ ]);