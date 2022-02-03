const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');


describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let round;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['object', 'array', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to store the deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should start with zero turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to hold correct guesses', () => {
    expect(round.correctGuesses).to.eql([]);
  });

  it('should be able to hold incorrect guesses', () => {
    expect(round.incorrectGuesses)to.eql([]);
  });

  it('should be able to track rounds total', () => {
    round.takeTurn('object');
    round.takeTurn('function');

    expect(round.turns).to.equal(2);
  });

  it('should be able to give correct feedback', () => {
    expect(round.takeTurn('object')).to.eql('correct!');
    expect(round.takeTurn('function')).to.eql('incorrect');
  });

  it('should be able to store guesses', () => {
    round.takeTurn('object');
    round.takeTurn('function');

    expect(round.correctGuesses).to.eql([1]);
    expect(round.incorrectGuesses)to.eql([2]);
  });

  it('should be able to calculate the percent correct', () => {
    round.takeTurn('object');
    round.takeTurn('function');

    expect(round.calculatePercentCorrect()).to.equal(.5);
  });

  it('should print a message when the round is over', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');

    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!')
  })
});
