let age = prompt('What is your age?');
age = Number(age);

let message;

if( age >= 21){
  message = 'You may enter to venue and drink!'
} else if ( age >= 19) {
  message = 'You may enter to venue, but not drink!'
} else {
  message = 'You are not allowed in.'
}

console.log(message);