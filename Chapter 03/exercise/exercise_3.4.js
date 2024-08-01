const myCar = {
  make: 'Vauxhall',
  model: 'Astra',
  colour: 'silver',
  year: 2009,
  taxed: true
}

let property = 'colour'

myCar[property] = "red"
console.log(myCar[property])

property = 'forSale'

myCar[property] = true;

console.log(myCar.make + " " + myCar.model + ' in ' + myCar.colour + ' is for sale: ' + myCar.forSale);