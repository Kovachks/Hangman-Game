/*
Generate a word to be used in the game - Done
display the length of the word with hidden letters - Done
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
var wordBank = ["hornets", "cavaliers", "celtics", "lakers", "rockets", "thunder", "pacers", "bulls", "magic", "jazz", "clippers", "spurs", "raptors"];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// computer selection from aray
var computerSelection = undefined;

//container for split guess
var computerSplit = undefined;

//array for holding user guesses
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
$("#computerWord").html("");
for (var i = 0; i < computerSplit.length; i += 1) {
	var newLetterDiv = $("<div></div>");
	newLetterDiv.addClass("container");
	computerLetter.append(newLetterDiv);
}

//Creating onkeyup event to log the users keystroke
document.onkeyup = function(event) {
	var userGuess = event.key;}

//for each letter create a letter container.  add text html to the letter container.
//after letters are completely filled out add that container to the above nested container.
//for underscores divs with a height of 5 pixels and width is the same as the letter
console.log(userGuess());