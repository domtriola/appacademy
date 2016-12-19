const Game = require('./towers-of-hanoi.js');
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let completionCallback = () => {
  console.log("You win!");
  reader.question("Would you like to play again? ", (response) => {
    if (response === 'yes') {
      new Game(reader, completionCallback).run();
    } else {
      reader.close();
    }
  });
};

let game = new Game(reader, completionCallback);
game.run();
