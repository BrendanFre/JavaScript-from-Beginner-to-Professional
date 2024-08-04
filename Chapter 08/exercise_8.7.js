let future = new Date('July 23, 2020');
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(future.getDate());
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(monthNames);

let newName = `${future.getDate()} ${monthNames[future.getMonth()]} ${future.getFullYear()}`;
console.log(newName)