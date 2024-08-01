let maxNumber = 8;
let correctAnswer = false;
let guess;

let solution = Math.floor(Math.random() * maxNumber + 1);

while (!correctAnswer) {
  guess = prompt("Guess a number between 1 and 5.");
  guess = Number(guess);
  correctAnswer = guess == solution ? true : false;
  correctAnswer ? console.log("Correct") : console.log("Incorrect guess");
}
