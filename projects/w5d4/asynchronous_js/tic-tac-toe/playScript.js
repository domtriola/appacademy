const Game = require('./game.js');
const Board = require('./board.js');
const Player = require('./humanPlayer.js');
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let completionCallback = () => {
  reader.question("Would you like to play again? ", (response) => {
    if (response === 'yes') {
      new Game(reader, completionCallback,
               new Player('x'), new Player('o'),
               new Board()).play();
    } else {
      reader.close();
    }
  });
};

let game = new Game(reader, completionCallback,
                    new Player('x'), new Player('o'),
                    new Board());
game.play();
