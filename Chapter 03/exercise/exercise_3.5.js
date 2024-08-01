let people = {
  friends: []
}

let oliver = {
  firstName: 'Oliver',
  lastName: 'Freeman',
  ID: 1,
}
let sherie = {
  firstName: 'Sherie',
  lastName: 'Lees',
  ID: 2,
}
let paul = {
  firstName: 'Paul',
  lastName: 'Freeman',
  ID: 3,
}

people['friends'].push(paul)
people['friends'].push(oliver)
people['friends'].push(sherie)

console.log(people)