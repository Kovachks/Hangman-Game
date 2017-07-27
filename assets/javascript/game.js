/*
Generate a word to be used in the game - Done
display computer generated word
create onkeyup event and store value for user input
check user guess against array of letters
if the guess was correct display letters
if guess was incorrect drop guesses remaining by 1
if word is complete log win
if guess remaining = 0 log loss
reset after either of above 2 conditions
*/

//Variables

//win container
var wins = 0;

//loss container
var losses = 0;

//guesses container
var guessesLeft = 12;

//word bank
var wordBank = ["hornets", "cavaliers", "celtics", "lakers", "rockets", "thunder"];

// computer selection from aray
var computerSelection = undefined;

//container for split guess
var computerSplit = undefined;

var userGuesses = [];

//functions

//Generating computers guess.
function computerGuessGen() {
	return Math.floor(Math.random() * wordBank.length);
}

//Storing randomly generated computer word as variable
computerSelection = wordBank[computerGuessGen()];

//Splits word into individual letters
computerSplit = computerSelection.split("");
console.log(computerSplit);
