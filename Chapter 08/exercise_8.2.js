let arr= ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
  "Laurence", "Mike", "Laurence", "Mike"]

arr = arr.filter((element, index) => {
  if(arr.indexOf(element) === index){
    return true
  }
})

console.log(arr)