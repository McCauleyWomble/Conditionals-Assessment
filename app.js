//===================Question 1===================

// Declare variables
let userChoice, randomNumber, computerChoice;

// Prompt user for choice
userChoice = prompt("Heads or tails?");

// Generate random number
randomNumber = Math.floor(Math.random() * 2);

// Assign heads or tails to computerChoice based on random number
if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}

// Compare userChoice and computerChoice
if (userChoice.toLowerCase() === computerChoice) {
    alert(`You guessed right! The coin flip landed on ${userChoice}.`);
} else {
    alert(`Sorry, the coin flip landed on ${computerChoice}.`);
}

//===================Question 2===================

// Declare variables
let birthYear, currentYear, age;

// Prompt user for birth year
birthYear = prompt("What year were you born?");

// Calculate age
currentYear = new Date().getFullYear();
age = currentYear - birthYear;

// Check age and alert appropriate message
if (age > 21) {
    alert("You are old enough to drink in the US.");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely.");
} else {
    alert("Sorry, you are not old enough to drink in the US.");
}

