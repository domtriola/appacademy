const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Ship() {
  MovingObject.call(this, {
    pos: Util.randomPos(600, 600),
    vel: [0, 0],
    color: Ship.COLOR,
    radius: Ship.RADIUS
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

module.exports = Ship;
