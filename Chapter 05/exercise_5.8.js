let stringy = "hello";
const skipMe = 3;

for (let index = 0; index < 10; index++) {
  if (index === skipMe) {
    break;
  }
  stringy += index;
}

console.log(stringy);
