const _ = require("lodash");

// going to create a guessing game with the system to see how long it take the system to guess the secret number.

let secretNumber = _.random(0, 100);

let guess = _.random(0, 100);
let count = 0;
let guessList = [];

// this while loop runs until the system guesses the correct number
// each time the range is changed based on if the guess was higher or lower than the scret number

while (guess != secretNumber) {
  
    guessList.push(guess);
  count += 1;

  if (guess > secretNumber) {
    console.log(
      `The Guess of ${guess} is higher than the secret number of ${secretNumber}`
    );
    guess = _.random(0, guess);
  } else {
    console.log(
      `the Guess of ${guess} was lower than the secret number of ${secretNumber}`
    );
    guess = _.random(guess, 100);
  }
  // checks to see if the number was already guessed  to reduce the amount of attempts by the system
  if (_.includes(guessList, guess)) {
    console.log(`This ${guess} was already guessed`);
    guess = _.random(0, 100);
    console.log(`The new guess is ${guess}`);
  }
}
console.log("");
console.log(
  ` Random feature: The secret number was ${secretNumber} and it took the system ${count} guesses to get the correct number`
);

// chunk spilts one array into multiple arrays within one master array.

let colour = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "black",
  "white",
  "teal",
  "aqua",
  "orange",
];

let length = 2;
let colours = _.chunk(colour, length);

console.log("");
console.log(
  `Useing Chunk: the array has been spilt into arrays of ${length} as seen below`
);
console.log(colours);
