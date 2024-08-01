let answer = Math.floor(Math.random() * 10 + 1);

let userAnswer = prompt("Please choose a number between 1 to 10");
userAnswer = Number(userAnswer);
let message;

if (userAnswer > answer) {
  message = `You selected ${userAnswer}, this is larger than ${answer}`;
} else if (userAnswer < answer) {
  message = `You selected ${userAnswer}, this is smaller than ${answer}`;
} else {
  message = `You selected ${userAnswer}, this is equal to ${answer}`;
}

window.alert(message);
