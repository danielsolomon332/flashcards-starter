const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const data = require('../src/data.js');
const cardData = data.prototypeData;


describe('Round', () => {
  let round;
  let deck;
  let cards = [];
  cardData.forEach(card => {
    cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
  });

  beforeEach(() => {
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to store the deck', () => {
    expect(round.deck.cards.length).to.deep.equal(30);
  });

  it('should be able to hold the current card', () => {
    expect(round.currentCard.id).to.equal(1);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard().correctAnswer).to.equal('object');
  });

  it('should start with zero turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to hold incorrect guesses', () => {
    expect(round.incorrectGuesses).to.eql([]);
  });

  it('should be able to track rounds total', () => {
    round.takeTurn('object');
    round.takeTurn('function');

    expect(round.turns).to.equal(2);
  });

  it('should evaulate if a user guess is correct', () => {
    round.takeTurn('object');

    expect(round.currentTurn.evaluateGuess()).to.equal(true);
  });

  it('should evaulate if a user guess is incorrect', () => {
    round.takeTurn('function');

    expect(round.currentTurn.evaluateGuess()).to.equal(false);
  });

  it('should give user correct feedback if they guess correctly', () => {
    round.takeTurn('object');


    expect(round.currentTurn.giveFeedback()).to.equal('correct!');
  });

  it('should give user correct feedback if they guess incorrectly', () => {
    round.takeTurn('function');

    expect(round.currentTurn.giveFeedback()).to.equal('incorrect');
  });

  it('should be able to store incorrect guesses', () => {
    round.takeTurn('function');

    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should be able to calculate the percent correct', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    round.takeTurn('accessor method');

    expect(round.calculatePercentCorrect()).to.equal(.75);
  });

  it('should print a message when the round is over', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    round.takeTurn('accessor method');

    expect(round.endRound()).to.equal('** Round over! ** You answered 75% of the questions correctly!')
  })
});
