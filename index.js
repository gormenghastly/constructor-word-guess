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

function getWord() {
  var rand = Math.floor(Math.random() * wordList.length);
  var randomWord = wordList[rand];
}

function playGame() {}

function getGuess() {}
