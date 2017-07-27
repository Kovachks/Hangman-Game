/*
Generate a word to be used in the game - Done
display the length of the word with hidden letters
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

var computerLetter = $("#computerLetter");

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

//Creating letter container for computer generated word
$("#computerWord").html("Test");
for (var i = 0; i < computerSplit.length; i += 1) {
	var newLetterDiv = $("<div>" + computerSplit[i] + "</div>");
	computerLetter.append(newLetterDiv);
}
console.log(newLetterDiv);

//for each letter create a letter container.  add text html to the letter container.
//after letters are completely filled out add that container to the above nested container.
//for underscores divs with a height of 5 pixels and width is the same as the letter
