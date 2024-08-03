class Employee{
  constructor(firstName, lastName, years){
    this.firstName = firstName;
    this.lastName = lastName;
    this.years = years;
  }
}

const employees = [];

const jane = new Employee("Jane", "Svekis", 10);
const oliver = new Employee("Oliver", "Doe", 5);

employees.push(jane)
employees.push(oliver)

Employee.prototype.details = function(){
  return `${this.firstName} ${this.lastName} has worked here for ${this.years} years.`
}

for(let i = 0; i < employees.length; i++){
  console.log(employees[i].details())
}