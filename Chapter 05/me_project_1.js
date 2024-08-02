// const table = [];
// let value = 4;

// for (let index = 0; index < value; index++) {
//   let row = [];
//   for (let y = 0; y < value; y++) {
//     row.push(y * index);
//   }
//   table.push(row);
// }

// console.table(table);

const myArray = [1,5,7];
for(el in myArray){
console.log(Number(el));
el = Number(el) + 5;
console.log(el);
}
console.log(myArray);