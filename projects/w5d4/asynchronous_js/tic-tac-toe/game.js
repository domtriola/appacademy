const Board = require('./board.js');
const Player = require('./humanPlayer.js');

class Game {

  constructor(reader, completionCallback, playerOne, playerTwo, board) {
    this.reader = reader;
    this.completionCallback = completionCallback;
    this.board = board;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentPlayer = this.playerOne;
  }

  play(){
    if (!this.board.won()) {
      console.log(this.board.grid);
      this.reader.question(`Make your move: `, (response) => {
        let move = response.split(",").map(el => parseInt(el));
        this.board.placeMark(move, this.currentPlayer.mark);
        this.switchPlayers();
        this.play();
      });
    } else {
      console.log(`${this.board.won()} wins!`);
      this.completionCallback();
    }
  }

  switchPlayers() {
    if (this.currentPlayer === this.playerOne)
      this.currentPlayer = this.playerTwo;
    else
      this.currentPlayer = this.playerOne;
  }
}

module.exports = Game;
