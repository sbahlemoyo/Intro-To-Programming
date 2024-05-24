"use strict"
//GET A ASECRET WORD
let words = ["apples", "oranges", "mango", "peach", "pear"];
let word = pickWord();

//CREATING AN EMPTY ANSWER ARRAY

let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let chances = word.length;
//MAIN GAME LOOP
while (remainingLetters > 0 && chances > 0) {
    //game code appears here
    //show the player their progress
    showPlayerProgress();
    //take input from the player
    guess = getGuess();
    if (guess === null) {
        alert("You quit the game. Please try next time again.");
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
        //update answer array and remainingLetters for every correct guess
        chances--;
        guess = guess.toLowerCase();
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer();

function pickWord() {
    //Return random word
    return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray() {
    //Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
}
function showPlayerProgress() {
    //Use alert to show player progress
    alert(answerArray.join(" "));
}
function getGuess() {
    //use prompt to get a guess
    return prompt("Guess a single letter or click cancel to end the game.");
}
function updateGameState() {
    //update answerArray and return a number showing how many times the 
    //guess appears in the word so remainingLetters can be updatedfor (let j = 0; j < word.length; j++) {
    let corrGuesses = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                answerArray[j] = guess;
                corrGuesses++;
            } else {
                alert("You've already guessed the letter " + guess);
                break;
            }
        }
    }
    return corrGuesses;
}
function showAnswerAndCongratulatePlayer() {
    //use alert to show the answer and congratulate the player
    if (remainingLetters === 0) {
        alert("Congratulations!");
    }
    if (chances === 0) {
        alert("You ran out of guesses");
    }
    alert(`The answer was ${word}`);
}