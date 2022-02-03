class Turn {
  constructor(playerGuess, card) {
    this.playerGuess = playerGuess;
    this.card = card;
    this.isPlayerCorrect = null;
  };

  returnGuess() {
    return this.playerGuess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    if (this.playerGuess === this.card.correctAnswer) {
      this.isPlayerCorrect = true;
      return true
    } else {
      this.isPlayerCorrect = false;
      return false
    };
  };

  giveFeedback() {
    if (this.isPlayerCorrect === true) {
      return 'correct!';
    } else {
      return 'incorrect';
    };
  };
};


module.exports = Turn;
