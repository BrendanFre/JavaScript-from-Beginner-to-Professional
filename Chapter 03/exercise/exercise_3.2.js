let shoppingList = [];

shoppingList.push('Milk', 'Bread', 'Apples');
shoppingList.splice(1,1, 'Bananas', 'Eggs')

console.log(shoppingList);

console.log(shoppingList.pop());

shoppingList.sort()

console.log(shoppingList.indexOf('Milk'));

shoppingList.splice(2,0, 'Carrots', 'Lettuce');

const drinkList = ['Juice', 'Pop'];

shoppingList = shoppingList.concat(drinkList);
shoppingList = shoppingList.concat(drinkList);

console.log(shoppingList.lastIndexOf("Pop"));
