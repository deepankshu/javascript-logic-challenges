// Number Guessing Game
// Computer generates a number between 1 and 10

let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = 5; // user guess

if (guess === randomNumber) {
    console.log("Correct! You guessed it.");
} else {
    console.log(`Wrong guess. The number was ${randomNumber}`);
}