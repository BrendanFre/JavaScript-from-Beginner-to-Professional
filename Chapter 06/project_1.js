function countUp(value){

  if(value > 10) {
  } else{
    console.log(value)
    return countUp(++value)
  }
}

countUp(3)