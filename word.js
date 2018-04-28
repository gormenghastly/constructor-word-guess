var letter = require('./letter.js');

function Word(word) {
  this.word = word;
  this.blankWord = [];

  this.createWord = function() {
    var wordArr = this.word.split('');
    for (var i = 0; i < wordArr.length; i++) {
      var newLetter = new letter(wordArr[i]);
      this.blankWord.push(newLetter);
    }
  };

  this.checkGuess = function(playerGuess) {
    for (var i = 0; i < blankWord.length; i++) {
      blankWord[i] = letter;
      letter.guessLetter(playerGuess);
    }
  };
}

module.exports = word;
