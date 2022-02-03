const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.eql(null);
  });

  it('should create cards', () => {
    game.start();

    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should put cards in a deck', () => {
    game.start();

    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('should create a new round', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
