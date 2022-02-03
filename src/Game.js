const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.deck = [];
  };

  start() {
    let cards = [];
    prototypeQuestions.forEach(card => {
      cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
    });
    this.deck = new Deck(cards);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
