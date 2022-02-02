class Turn {
  constructor(playerGuess, card) {
    this.playerGuess = playerGuess;
    this.currentCard = card;
    this.isPlayerCorrect = '';
  };

  returnGuess() {
    return this.playerGuess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {
    if (this.playerGuess === this.currentCard.correctAnswer) {
      return this.isPlayerCorrect = true;
    } else {
      return this.isPlayerCorrect = false;
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
