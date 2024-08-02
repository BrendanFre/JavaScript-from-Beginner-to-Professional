const arr = [];

let add = (x, y) => x + y;

for(let index = 0; index < 10; index++) {
  let x = index * 5;
  let y = index ** 2;
  arr.push(add(x, y));

}

console.log(arr)


