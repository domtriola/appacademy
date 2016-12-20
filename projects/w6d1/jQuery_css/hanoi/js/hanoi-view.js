class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
    this.addClickEvents();
  }

  addClickEvents() {
    let game = this.game;
    const view = this;

    $('.pile').each(function() {
      this.addEventListener('click', () => {
        let pile = $(this);
        if (game.fromPile > -1 && game.fromPile !== null) {
          if (game.isValidMove(game.fromPile, pile.data('idx'))) {
            game.move(game.fromPile, pile.data('idx'));
            view.render();
            game.fromPile = null;
            if (game.isWon()) {
              alert('Winner!');
            }
          } else {
            alert('Invalid move!');
            game.fromPile = null;
          }
        } else {
          game.fromPile = pile.data('idx');
        }
      });
    });
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let pile = $('<ul>');
      pile.addClass('pile');
      pile.data('idx', i);
      this.rootEl.append(pile);
    }

    for (let i = 2; i >= 0; i--) {
      let disc = $('<li>');
      disc.addClass('disc');
      disc.attr('data-size', i + 1);
      $(this.rootEl.children()[0]).append(disc);
    }
  }

  render() {
    let piles = $('.pile');
    piles.empty();
    // let revTowers = this.game.towers.slice(0).map(tower => {
    //   return tower.slice(0).reverse();
    // });
    this.game.towers.forEach((row, idx) => {
      row.forEach((el) => {
        let disc = $('<li>');
        disc.addClass('disc');
        disc.attr('data-size', el);
        $(piles[idx]).append(disc);
      });
    });
  }
}

module.exports = HanoiView;
