let userInput = prompt("Please enter a name");
userInput = userInput.toLowerCase();
let message;

switch (userInput) {
  case "bob":
    message = "Bob is known.";
    break;
  case "george":
    message = "George is known.";
    break;
  case "oscar":
    message = "Oscar is known.";
    break;

  default:
    message = `${userInput} is not known`;
    break;
}

console.log(message);
