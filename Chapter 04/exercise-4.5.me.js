let prize = prompt("Please enter a number between 0 and 10");
prize = Number(prize);

let message = "My Selection: ";
let answer;

switch (prize) {
  case 0:
  case 1:
  case 2:
    answer = "No Prize";
    break;
  case 3:
  case 4:
  case 5:
    answer = "Chocolate bar";
    break;
  case 6:
  case 7:
  case 8:
    answer = "Mobile Phone";
    break;
  case 9:
  case 10:
    answer = "PlayStation 5";
    break;

  default:
    break;
}

console.log(message + answer);
