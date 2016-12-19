const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Bullet(opts) {
  MovingObject.call(this, opts);
}
Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;
