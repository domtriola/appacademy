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

	const GameView = __webpack_require__(1);

	addEventListener('DOMContentLoaded', () => {
	  let canvas = document.getElementById('game-canvas');
	  let ctx = canvas.getContext('2d');

	  let newGameView = new GameView(ctx);
	  newGameView.start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(2);

	function GameView(ctx) {
	  this.ctx = ctx;
	  this.game = new Game();
	  this.ship = this.game.addShip();
	  this.bullets = [];
	}
	GameView.prototype.start = function() {
	  this.bindKeyHandlers();
	  setInterval(() => {
	    this.game.moveObjects();
	    this.game.draw(this.ctx);
	  }, 20);
	};

	GameView.DIRS = {
	  "w": [0, -1],
	  "up": [0, -1],
	  "a": [-1, 0],
	  "left": [-1, 0],
	  "s": [0, 1],
	  "down": [0, 1],
	  "d": [1, 0],
	  "right": [1, 0]
	};
	GameView.prototype.bindKeyHandlers = function() {
	  Object.keys(GameView.DIRS).forEach(dir => {
	    let move = GameView.DIRS[dir];
	    key(dir, () => {
	      this.ship.power(move);
	      return false;
	    });
	  });

	  key('space', () => {
	    this.game.addBullet(this.ship.fireBullet());
	    return false;
	  });
	};

	module.exports = GameView;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(3);
	const Asteroid = __webpack_require__(4);
	const Ship = __webpack_require__(6);
	const Bullet = __webpack_require__(7);

	function Game() {
	  this.bullets = [];
	  this.addAsteroids();
	}
	Game.DIM_X = 600;
	Game.DIM_Y = 600;
	Game.NUM_ASTEROIDS = 10;

	Game.prototype.addShip = function() {
	  this.ship = new Ship(this);
	  return this.ship;
	};
	Game.prototype.addAsteroids = function() {
	  this.asteroids = [];
	  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
	    this.asteroids.push(new Asteroid(this,
	      Util.randomPos(Game.DIM_X, Game.DIM_Y)
	    ));
	  }
	};
	Game.prototype.addBullet = function(bullet) {
	  if (bullet) this.bullets.push(bullet);
	};
	Game.prototype.allObjects = function() {
	  return [this.ship].concat(this.asteroids).concat(this.bullets);
	};
	Game.prototype.draw = function(ctx) {
	  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	  this.allObjects().forEach(object => object.draw(ctx));
	};
	Game.prototype.moveObjects = function() {
	  this.allObjects().forEach(object => {
	    object.move();
	    this.handleOutOfBounds(object);
	  });
	  this.checkCollisions();
	};
	Game.prototype.checkCollisions = function() {
	  let toBeDestroyed = [];
	  this.allObjects().forEach((object, i) => {
	    this.allObjects().forEach((object2, j) => {
	      if (i !== j)
	        object.isCollidedWith(object2);
	    });
	  });
	};
	Game.prototype.handleOutOfBounds = function(obj) {
	  if (obj.pos[0] > Game.DIM_X || obj.pos[0] < 0 ||
	      obj.pos[1] > Game.DIM_Y || obj.pos[1] < 0) {
	    if (!obj.isWrappable)
	      this.destroy(obj);
	    else
	      obj.wrap();
	  }
	};
	Game.prototype.destroy = function(obj) {
	  if (obj instanceof Bullet)
	    this.bullets.splice(this.bullets.indexOf(obj), 1);
	  else if (obj instanceof Asteroid)
	    this.asteroids.splice(this.asteroids.indexOf(obj), 1);
	};

	module.exports = Game;


/***/ },
/* 3 */
/***/ function(module, exports) {

	const Util = window.Util = {
	  inherits (childClass, parentClass) {
	    function Surrogate() {}
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	    childClass.constructor = childClass;
	  },

	  randomVec(length) {
	    const deg = 2 * Math.PI * Math.random();
	    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	  },

	  scale(vec, m) {
	    return [vec[0] * m, vec[1] * m];
	  },

	  randomPos(maxX, maxY) {
	    return [Math.random() * maxX, Math.random() * maxY];
	  },

	  dist(pos1, pos2) {
	    return Math.sqrt(
	      Math.pow(pos1[0] - pos2[0], 2) +
	      Math.pow(pos1[1] - pos2[1], 2)
	    );
	  }
	};

	module.exports = Util;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(3);
	const MovingObject = __webpack_require__(5);
	const Ship = __webpack_require__(6);
	const Bullet = __webpack_require__(7);

	function Asteroid(game, pos) {
	  MovingObject.call(this, {
	    pos: pos,
	    vel: Util.randomVec(2),
	    color: Asteroid.COLOR,
	    radius: Asteroid.RADIUS,
	    game: game
	  });
	}

	Util.inherits(Asteroid, MovingObject);

	Asteroid.COLOR = "darksalmon";
	Asteroid.RADIUS = 20;

	Asteroid.prototype.isCollidedWith = function(otherObject) {
	  let dist = Util.dist(this.pos, otherObject.pos);
	  if (otherObject instanceof Ship
	      && dist < (this.radius + otherObject.radius))
	    otherObject.relocate();
	  else if (otherObject instanceof Bullet
	           && dist < (this.radius + otherObject.radius)) {
	    this.game.destroy(otherObject);
	    this.game.destroy(this);
	  }
	};

	module.exports = Asteroid;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(3);

	function MovingObject(opts = {}) {
	  this.pos = opts.pos;
	  this.vel = opts.vel;
	  this.radius = opts.radius;
	  this.color = opts.color;
	  this.game = opts.game;
	}
	MovingObject.prototype.draw = function(ctx) {
	  ctx.fillStyle = this.color;

	  ctx.beginPath();
	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI
	  );

	  ctx.fill();
	};
	MovingObject.prototype.move = function() {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	};
	MovingObject.prototype.wrap = function() {
	  if (this.pos[0] > 600)
	    this.pos[0] = 0;
	  else if (this.pos[0] < 0)
	    this.pos[0] = 600;

	  if (this.pos[1] > 600)
	    this.pos[1] = 0;
	  else if (this.pos[1] < 0)
	    this.pos[1] = 600;
	};
	MovingObject.prototype.isCollidedWith = function(otherObject) {};
	MovingObject.prototype.isWrappable = true;

	module.exports = MovingObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(3);
	const MovingObject = __webpack_require__(5);
	const Bullet = __webpack_require__(7);

	function Ship(game) {
	  MovingObject.call(this, {
	    pos: Util.randomPos(600, 600),
	    vel: [0, 0],
	    color: Ship.COLOR,
	    radius: Ship.RADIUS,
	    game: game
	  });
	}
	Util.inherits(Ship, MovingObject);

	Ship.COLOR = "teal";
	Ship.RADIUS = 15;

	Ship.prototype.relocate = function() {
	  this.pos = Util.randomPos(600, 600);
	  this.vel = [0, 0];
	};
	Ship.prototype.power = function(impulse) {
	  this.vel[0] += impulse[0];
	  this.vel[1] += impulse[1];
	};
	Ship.prototype.fireBullet = function() {
	  let shipPos = this.pos.slice(0);
	  let shipVel = this.vel.slice(0);
	  let norm = Util.dist([0, 0], shipVel);
	  if (norm > 0) {
	    return new Bullet({
	      pos: shipPos,
	      vel: [shipVel[0] * 2, shipVel[1] * 2],
	      color: 'blue',
	      radius: 2,
	      game: this.game
	    });
	  } else return false;
	};

	module.exports = Ship;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(3);
	const MovingObject = __webpack_require__(5);

	function Bullet(opts) {
	  MovingObject.call(this, opts);
	}
	Util.inherits(Bullet, MovingObject);

	Bullet.prototype.isWrappable = false;

	module.exports = Bullet;


/***/ }
/******/ ]);