let value = 5.7;
console.log(Math.PI)
console.log(Math.ceil(value))
console.log(Math.floor(value))
console.log(Math.round(value))
console.log(Math.random())
console.log(Math.floor(Math.random()* 10))
console.log(Math.floor((Math.random()* 10) + 1))
console.log(Math.floor((Math.random()* 100 )+ 1))

function random (min, max) {
  return Math.floor((Math.random() * max) + min)
}

for (let x = 0; x < 100; x++) {
  console.log(random(0, x))
}
