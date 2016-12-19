const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

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
           && dist < (this.radius + otherObject.radius))
    this.game.destroy(this);
};

module.exports = Asteroid;
