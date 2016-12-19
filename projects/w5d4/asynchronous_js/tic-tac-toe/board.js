class Board {
  constructor(grid) {
    this.grid = [[null, null, null],
                 [null, null, null],
                 [null, null, null]];
  }

  won() {
    let marks = ['x', 'o'];
    let winner = null;

    marks.forEach((mark) => {
      let rowWon = this.grid.some( (row) => {
        return row.every( (space) => {
          return space === mark;
        });
      });
      if (rowWon) winner = mark;

      let columns = [[], [], []];
      let diagonals = [[], []];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          columns[i][j] = this.grid[j][i];
          if (i === j) diagonals[0].push(this.grid[i][j]);
        }
      }

      let columnWon = columns.some( (row) => {
        return row.every( (space) => {
          return space === mark;
        });
      });
      if (columnWon) winner = mark;

      diagonals[1].push(this.grid[2][0]);
      diagonals[1].push(this.grid[1][1]);
      diagonals[1].push(this.grid[0][2]);

      let diagonalWon = diagonals.some( (row) => {
        return row.every( (space) => {
          return space === mark;
        });
      });
      if (diagonalWon) winner = mark;
    });

    return winner;
  }

  empty(pos) {
    let [row, col] = pos;
    return this.grid[row][col] === null;
  }

  placeMark(pos, mark) {
    let [row, col] = pos;
    this.grid[row][col] = mark;
  }
}

module.exports = Board;
