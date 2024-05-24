let secret = Math.floor(Math.random() * 20);
/*if (guess === 12) {
    alert("Correct answer!");
} else {
    alert("Sorry, incorrect guess!");
}*/

while (parseInt(guess) !== secret) {
    var guess = prompt("Please guess the secret number (between 1 and 20)");
    if (guess === null) {
        alert("You quit the game. Come back again next time!")
        break;
    }
    if (guess == secret) {
        alert("Correct answer!");
        break;
    } else if (guess < secret) {
        alert("Incorrect guess! Too low");
    } else if (guess > secret) {
        alert("Incorrect guess! Too high")
    }
}