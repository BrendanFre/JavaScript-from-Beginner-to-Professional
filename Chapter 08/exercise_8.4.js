let words = 'hello I am Brendan.'

function doStuff(string){
  let arr = string.toLowerCase().split(' ')
  let newArr = []
  arr.forEach(element => {
    newArr.push(element.slice(0, 1).toUpperCase().concat(element.slice(1, element.length).toLowerCase()))});
  return newArr.join(' ');
}

console.log(doStuff(words))