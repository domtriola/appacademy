const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');
const Bullet = require('./bullet.js');

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
