const inventory = []

const itemOne = {
  name: 'Cheese',
  model: 'Mature',
  cost: 1.99,
  quantity: 5
}
const itemTwo = {
  name: 'Tomato',
  model: 'Plum',
  cost: 2.99,
  quantity: 8
}
const itemThree = {
  name: 'Bread',
  model: 'Brown',
  cost: 1.50,
  quantity: 2
}

inventory.push(itemOne, itemThree, itemTwo)

console.log(inventory)

console.log(inventory[2].quantity)

inventory.length = 0

console.log(inventory)