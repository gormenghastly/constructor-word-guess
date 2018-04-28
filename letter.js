function Letter(letter) {
    this.letter = letter,
        this.letterGuess = false,

        this.showLetter = function () {

            if (this.letterGuess === true) {
                return this.letter;
            } else {
                return '_';
            }
        },

        this.guessLetter = function (playerGuess) {

            if (playerGuess === this.letter) {
                this.letterGuess = true;
            }
        }
}

var newLetter = new Letter('x', true);
console.log(newLetter.showLetter());

module.exports = Letter;