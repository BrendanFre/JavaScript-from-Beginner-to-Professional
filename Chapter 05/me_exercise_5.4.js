const myTable = [];
let rows = 9;
let cols = 9;

let counter = 0;

for(let i = 0; i < rows; i++) {
  let tempTable = []

  for(let j = 0; j < cols; j++){
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}

console.table(myTable);