let arr = [];
const length = Math.floor(Math.random()* 10);

console.log(length);
for (let i = 0; i < length; i++) {
  arr.push(Math.floor(Math.random() * 100))
}
console.log('Original array: ' + arr)

arr = arr.map(item => item * 2);

console.log('New array: ' + arr)