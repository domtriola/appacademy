const Util = require('./utils.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

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
  this.allObjects().forEach(object => object.move());
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
Game.prototype.destroy = function(obj) {
  if (obj instanceof Bullet)
    this.bullets.splice(this.bullets.indexOf(obj), 1);
  else if (obj instanceof Asteroid)
    this.asteroids.splice(this.asteroids.indexOf(obj), 1);
};

module.exports = Game;
