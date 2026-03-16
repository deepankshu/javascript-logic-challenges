// Number Guessing Game V2
// The computer generates a random number between 1 and 10.
// The user keeps guessing until the correct number is entered.

let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = Number(prompt("Guess a number between 1 and 10"));

while (guess !== randomNumber) {

    if (guess > randomNumber) {
        console.log("Too high! Guess again.");
    } else {
        console.log("Too low! Guess again.");
    }

    guess = Number(prompt("Guess again:"));
}

console.log("Correct! You guessed the number.");