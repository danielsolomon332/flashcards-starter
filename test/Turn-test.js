const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card = null;
  let turn = null;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a player\s guess', () => {
    expect(turn.playerGuess).to.equal('object');
  });

  it('should store the current card', () => {
    expect(turn.currentCard).to.deep.equal(card);
  });

  it('should return the player\s guess', () => {
    turn.returnGuess();

    expect(turn.playerGuess).to.equal('object');
  });

  it('should return the card', () => {
    turn.returnCard(card);

    expect(turn.currentCard).to.deep.equal(card);
  });

  it('should evaluate the player\s guess', () => {
    turn.evaluateGuess();

    expect(turn.isPlayerCorrect).to.deep.equal(true);
  });

  it('should give the player feedback', () => {
    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.deep.equal('correct!');
  });
});
