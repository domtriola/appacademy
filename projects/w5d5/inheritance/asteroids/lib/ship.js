const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Ship() {
  MovingObject.call(this, {
    pos: [300, 300],
    vel: [0, 0],
    color: Ship.COLOR,
    radius: Ship.RADIUS
  });
}
Util.inherits(Ship, MovingObject);

Ship.COLOR = "teal";
Ship.RADIUS = 15;

module.exports = Ship;
