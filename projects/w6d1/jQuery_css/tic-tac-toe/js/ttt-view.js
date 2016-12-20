class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let view = this;

    $('.tile').each( function () {
      this.addEventListener('click', (e) => {
        let target = $(e.target);
        view.makeMove(target);
      });
    });
  }

  makeMove($square) {
    if (!$square.text()) {
      $square.text(this.game.currentPlayer);
      $square.addClass('clicked');
      this.game.playMove($square.data('coords'));
      if (this.game.isOver()) {
        alert(`${this.game.winner()} wins!`);
      }
    } else {
      alert('Invalid move');
    }
  }

  setupBoard() {
    const grid = $('<ul></ul>');
    grid.addClass('group');
    this.game.board.grid.forEach((row, rowIdx) => {
      row.forEach((el, colIdx) => {
        let tile = ($('<li></li>'));
        tile.addClass('tile');
        tile.data('coords', [rowIdx, colIdx]);
        grid.append(tile);
      });
    });
    this.el.append(grid);
  }
}

module.exports = View;
