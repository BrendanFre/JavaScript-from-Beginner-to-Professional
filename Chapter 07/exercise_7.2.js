class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullname(){
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person("Maaike", "van Putten");
const person2 = new Person("Laurence", "Svekis");

console.log(person1.fullname());
console.log(person2.fullname());