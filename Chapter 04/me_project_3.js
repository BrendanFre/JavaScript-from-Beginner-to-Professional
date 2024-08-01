const options = ["paper", "scissors", "rock"];

let playerSelection = Math.floor(Math.random() * 3);
playerSelection = options[playerSelection];

console.log(playerSelection);

let computerSelection = Math.floor(Math.random() * 3);
computerSelection = options[computerSelection];

let result;
let selectionMessage = `The player selected ${playerSelection}, and the computer selected ${computerSelection}. The player: `;

if ((playerSelection == "paper")) {
  switch (computerSelection) {
    case "paper":
      result = "draws";
      break;
    case "scissors":
      result = "loses";
      break;
    case "rock":
      result = "wins";
      break;
    default:
      break;
  }
} else if ((playerSelection == "scissors")) {
  switch (computerSelection) {
    case "paper":
      result = "wins";
      break;
    case "scissors":
      result = "draws";
      break;
    case "rock":
      result = "loses";
      break;
    default:
      break;
  }
} else {
  switch (computerSelection) {
    case "paper":
      result = "loses";
      break;
    case "scissors":
      result = "wins";
      break;
    case "rock":
      result = "draws";
      break;
    default:
      break;
  }
}

console.log(selectionMessage + result);
