class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const friend = new Person('Bob', 'Turnip');
const second = new Person('John', 'Murder');

console.log(`Hello ${friend.firstName + " " + friend.lastName}`);