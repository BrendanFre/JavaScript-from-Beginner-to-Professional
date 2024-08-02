const arr = [];
const i = 10;
let counter = 0;

do {
  arr.push(counter);
  counter++;
} while (counter < i);

console.log(arr);

for (let y = 0; y < arr.length; y++) {
  console.log(arr[y]);
}

for (const z of arr) {
    console.log(z)
}
