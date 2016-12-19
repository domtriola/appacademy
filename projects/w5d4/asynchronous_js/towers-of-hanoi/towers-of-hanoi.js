class Game {
  constructor(reader, completionCallback, stacks = [[3, 2, 1], [], []]) {
    this.stacks = stacks;
    this.reader = reader;
    this.completionCallback = completionCallback;
  }

  run() {
    if (!this.isWon()) {
      this.promptMove();
    } else {
      this.completionCallback();
    }
  }

  promptMove() {
    this.print();
    this.reader.question('Make move: ', (move) => {
      let [startTower, endTower] = move.split(",").map(el => parseInt(el));

      if (this.isValidMove(startTower, endTower)) {
        this.move(startTower, endTower);
        this.run();
      } else {
        console.log("Invalid move!");
        this.promptMove();
      }
    });
  }

  isValidMove(startTower, endTower) {
    let firstTower = this.stacks[startTower];
    let firstDisk = firstTower[firstTower.length - 1];
    let secondTower = this.stacks[endTower];
    let secondDisk = secondTower[secondTower.length - 1];

    if (firstTower.length < 1 || firstDisk > secondDisk)
      return false;
    else
      return true;
  }

  move(startTower, endTower) {
    let disk = this.stacks[startTower].pop();
    this.stacks[endTower].push(disk);
    return true;
  }

  print() {
    let output = this.stacks.reduce((string, tower, index) => {
      return string + `${index}: ${tower.join(' ')}\n`;
    }, "");

    console.log(output);
  }

  isWon() {
    if (this.stacks[1].length === 3 || this.stacks[2].length === 3)
      return true;
    else
      return false;
  }
}

module.exports = Game;
