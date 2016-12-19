const Util = require('./utils.js');
const Asteroid = require('./asteroid');
const Ship = require('./ship.js');

function Game() {
  this.addAsteroids();
  this.ship = new Ship();
}
Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.allObjects = function() {
  return [this.ship].concat(this.asteroids);
};
Game.prototype.addAsteroids = function() {
  this.asteroids = [];
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(
      Util.randomPos(Game.DIM_X, Game.DIM_Y)
    ));
  }
};
Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(object => object.draw(ctx));
};
Game.prototype.moveObjects = function() {
  this.allObjects().forEach(objects => objects.move());
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

module.exports = Game;
