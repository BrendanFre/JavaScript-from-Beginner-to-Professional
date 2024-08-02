let x = 54;
let y = 34;

let operator = "+";

function calculate(a, b, o) {
  switch (o) {
    case "-":
      return a - b;
    default:
      return a + b;
  }
}

console.log(calculate(x, y, operator));
