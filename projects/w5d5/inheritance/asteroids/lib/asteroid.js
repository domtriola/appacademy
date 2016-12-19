const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Asteroid(pos) {
  MovingObject.call(this, {
    pos: pos,
    vel: Util.randomVec(2),
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS
  });
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "darksalmon";
Asteroid.RADIUS = 20;

module.exports = Asteroid;
