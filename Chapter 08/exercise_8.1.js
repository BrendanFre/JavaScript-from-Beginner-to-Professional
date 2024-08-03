const first = 'How\'s%20it%20going%3F';
const second = 'http://www.basescripts. com?=Hello World';

console.log(encodeURIComponent(first))
console.log(decodeURIComponent(first));

console.log(encodeURIComponent(second));
console.log(decodeURIComponent(second));