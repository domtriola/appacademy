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

	const HanoiGame = __webpack_require__(1);
	const HanoiView = __webpack_require__(2);

	$( () => {
	  const rootEl = $('.hanoi');
	  const game = new HanoiGame();
	  new HanoiView(game, rootEl);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Game {
	  constructor() {
	    this.towers = [[3, 2, 1], [], []];
	  }

	  isValidMove(startTowerIdx, endTowerIdx) {
	      const startTower = this.towers[startTowerIdx];
	      const endTower = this.towers[endTowerIdx];

	      if (startTower.length === 0) {
	        return false;
	      } else if (endTower.length == 0) {
	        return true;
	      } else {
	        const topStartDisc = startTower[startTower.length - 1];
	        const topEndDisc = endTower[endTower.length - 1];
	        return topStartDisc < topEndDisc;
	      }
	  }

	  isWon() {
	      // move all the discs to the last or second tower
	      return (this.towers[2].length == 3) || (this.towers[1].length == 3);
	  }

	  move(startTowerIdx, endTowerIdx) {
	      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
	        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
	        return true;
	      } else {
	        return false;
	      }
	  }

	  print() {
	      console.log(JSON.stringify(this.towers));
	  }

	  promptMove(reader, callback) {
	      this.print();
	      reader.question("Enter a starting tower: ", start => {
	        const startTowerIdx = parseInt(start);
	        reader.question("Enter an ending tower: ", end => {
	          const endTowerIdx = parseInt(end);
	          callback(startTowerIdx, endTowerIdx)
	        });
	      });
	  }

	  run(reader, gameCompletionCallback) {
	      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
	        if (!this.move(startTowerIdx, endTowerIdx)) {
	          console.log("Invalid move!");
	        }

	        if (!this.isWon()) {
	          // Continue to play!
	          this.run(reader, gameCompletionCallback);
	        } else {
	          this.print();
	          console.log("You win!");
	          gameCompletionCallback();
	        }
	      });
	  }
	}

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class HanoiView {
	  constructor(game, rootEl) {
	    this.game = game;
	    this.rootEl = rootEl;
	    this.setupTowers();
	    this.addClickEvents();
	  }

	  addClickEvents() {
	    let game = this.game;
	    const view = this;

	    $('.pile').each(function() {
	      this.addEventListener('click', () => {
	        let pile = $(this);
	        if (game.fromPile > -1 && game.fromPile !== null) {
	          if (game.isValidMove(game.fromPile, pile.data('idx'))) {
	            game.move(game.fromPile, pile.data('idx'));
	            view.render();
	            game.fromPile = null;
	            if (game.isWon()) {
	              alert('Winner!');
	            }
	          } else {
	            alert('Invalid move!');
	            game.fromPile = null;
	          }
	        } else {
	          game.fromPile = pile.data('idx');
	        }
	      });
	    });
	  }

	  setupTowers() {
	    for (let i = 0; i < 3; i++) {
	      let pile = $('<ul>');
	      pile.addClass('pile');
	      pile.data('idx', i);
	      this.rootEl.append(pile);
	    }

	    for (let i = 2; i >= 0; i--) {
	      let disc = $('<li>');
	      disc.addClass('disc');
	      disc.attr('data-size', i + 1);
	      $(this.rootEl.children()[0]).append(disc);
	    }
	  }

	  render() {
	    let piles = $('.pile');
	    piles.empty();
	    // let revTowers = this.game.towers.slice(0).map(tower => {
	    //   return tower.slice(0).reverse();
	    // });
	    this.game.towers.forEach((row, idx) => {
	      row.forEach((el) => {
	        let disc = $('<li>');
	        disc.addClass('disc');
	        disc.attr('data-size', el);
	        $(piles[idx]).append(disc);
	      });
	    });
	  }
	}

	module.exports = HanoiView;


/***/ }
/******/ ]);