let randomNumber = Math.floor(Math.random() * 5);

let userString = prompt("Please provide a string.");
let message;

switch (randomNumber) {
  case 0:
    message = `Randomly selected 0, your string is ${userString}`;
    break;
  case 1:
    message = `Randomly selected 1, your string is ${userString}`;
    break;
  case 2:
    message = `Randomly selected 2, your string is ${userString}`;
    break;
  case 3:
    message = `Randomly selected 3, your string is ${userString}`;
    break;
  case 4:
    message = `Randomly selected 4, your string is ${userString}`;
    break;
  case 5:
    message = `Randomly selected 5, your string is ${userString}`;
    break;

  default:
    message = "You broke the function.";
    break;
}

console.log(message);
