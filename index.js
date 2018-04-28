var word = require('./word.js');
var inquirer = require('inquirer');

var wordList = ['macaroni', 'spaghetti', 'fusilli', 'ravioli', 'lasagne',
    'tortellini', 'penne', 'fettucini', 'orzo', 'pappardelle'];

var randomWord = function () {
    var randWord = Math.floor(Math.random() * wordList.length);
}

