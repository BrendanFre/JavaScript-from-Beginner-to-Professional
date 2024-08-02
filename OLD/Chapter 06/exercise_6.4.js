const values = [];

for (let index = 0; index < 10; index++) {
  let x = index * 5;
  let y = index ** 2;
  let response = addNumbers(x, y);
  values.push(response);
}

console.log(values);

function addNumbers(a, b) {
  return a + b;
}
