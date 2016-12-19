const Game = require('./game.js');

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
