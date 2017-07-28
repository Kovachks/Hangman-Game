/*
Generate a word to be used in the game - Done
display the length of the word with hidden letters - Done
create onkeyup event and store value for user input - Done
check user guess against array of letters.  Display if a letter was not selected - Done
check user guess against array of letters in computer guess - Done
if the guess was correct display letters - incomplete
if guess was incorrect drop guesses remaining by 1 - Done
if word is complete log win - Done
if guess remaining = 0 log loss - Done
reset after either of above 2 conditions - Done

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

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// computer selection from aray
var computerSelection = undefined;

//container for split guess
var computerSplit = undefined;

//Holds full computer answer
var computerAnswer = undefined;

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
computerAnswer = computerSelection.split("");
console.log(computerSplit);

//Creating letter container for computer generated word
$("#computerWord").html("");

//Iniating loop
for (var i = 0; i < computerSplit.length; i += 1) {

	//creating div containers for letters in computer guess
	var newLetterDiv = $("<div`></div>");
	
	//Adding container class to newly created divs
	newLetterDiv.addClass("container" + i);

	//adding divs to parent container
	computerLetter.append(newLetterDiv);
}

//Creating onkeyup event to log the users keystroke
document.onkeyup = function(event) {

	//Logging keystroke into variable for future use
	var userGuess = event.key.toLowerCase();

	//check if user selected letter
	if (letters.indexOf(userGuess) > -1) {

		//correct selection
		if (computerSplit.indexOf(userGuess) > -1) {

			//
			for (var i = 0; i < computerAnswer.length; i += 1) {
				if (computerSplit.indexOf(userGuess) > -1) {
				
                //to add letter to screen after correct quess
                $(".container" + computerAnswer.indexOf(userGuess)).html(userGuess);

            	//removing original in guess in case of duplicates
            	computerAnswer[computerAnswer.indexOf(userGuess)] = "_";

                //Removing correct selection from computer word array - looping for duplicate letters in array
				computerSplit.splice(computerSplit.indexOf(userGuess), 1);
				
				//removing selected letter from possible guesses
				letters.splice(letters.indexOf(userGuess), 1);
				}	else {
			}
		}

			//Checking to see if user won game
			if (computerSplit.length === 0) {
				alert("You won!");
				wins = wins + 1;

				//reseting game
				guessesLeft = 12;
				letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
				userGuesses = [];
				for (var i = 0; i < computerAnswer.length; i += 1) {
				$(".container" + i).remove();
			}
				
				//Wet code to choose a new word on loss
				function computerGuessGen() {
					return Math.floor(Math.random() * wordBank.length);
				}
				computerSelection = wordBank[computerGuessGen()];
				computerSplit = computerSelection.split("");
				computerAnswer = computerSelection.split("");
				$("#computerWord").html("");
				for (var i = 0; i < computerSplit.length; i += 1) {
						var newLetterDiv = $("<div></div>");
						newLetterDiv.addClass("container" + i);
						computerLetter.append(newLetterDiv);
				}
			} else {

			}

		//Continuing game if there are guesses left
		} else if (guessesLeft > 1 ){
			//lowering the guesses left by 1
			guessesLeft = guessesLeft - 1;

			//removes guessed letter from array of selections
			letters.splice(letters.indexOf(userGuess), 1);

			//pushes guessed letter to userguesses array
			userGuesses.push(userGuess);

		}	else {

			//alerting loser they lost
			alert("You lost.  Try again!");
			losses = losses + 1;
			
			//reseting game
			guessesLeft = 12;
			letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
			userGuesses = [];
			$(".container").remove();
			
			//Wet code to choose a new word on loss
			function computerGuessGen() {
				return Math.floor(Math.random() * wordBank.length);
			}
			computerSelection = wordBank[computerGuessGen()];
			computerSplit = computerSelection.split("");
			computerAnswer = computerSelection.split("");
			$("#computerWord").html("");
			for (var i = 0; i < computerSplit.length; i += 1) {
					var newLetterDiv = $("<div></div>");
					newLetterDiv.addClass("container" + i);
						computerLetter.append(newLetterDiv);}

		}
	//if no letter was selected alert the user to select a letter
	} else {
		alert("Please select a letter");
	}

	var html = "<p>Guesses Left: " + guessesLeft + "</p>" +
			   "<p>User Guesses: " + userGuesses + "</p>" +
			   "<p>Wins: " + wins + "</p>" + 
			   "<p>Losses : " + losses + "</p>";

	document.querySelector("#computerWord").innerHTML = html;
}

//for each letter create a letter container.  add text html to the letter container.
//after letters are completely filled out add that container to the above nested container.
//for underscores divs with a height of 5 pixels and width is the same as the letter
