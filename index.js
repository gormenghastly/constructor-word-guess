var word = require('./word.js');
var inquirer = require('inquirer');

var wordList = [
  'macaroni',
  'spaghetti',
  'fusilli',
  'ravioli',
  'lasagne',
  'tortellini',
  'penne',
  'fettucini',
  'orzo',
  'pappardelle'
];

function startGame() {
  console.log(
    'pick a plate of pasta but guess the type of pasta first, one letter at at a time!'
  );
  getWord();
}
function getWord() {
  var rand = Math.floor(Math.random() * wordList.length);
  var randomWord = wordList[rand];
  randomWord.createWord();
}

function playGame() {}

function getGuess() {
  inquirer
    .prompt({
      type: 'input',
      name: 'playerGuess',
      message: 'pick a letter!'
    })
    .then(function(response) {
      word.checkGuess(response);
    });
}
