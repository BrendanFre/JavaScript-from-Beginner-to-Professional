function factorial(param) {
  if(param === 0){
    return 1;
  } else return param * factorial(param - 1)
}

console.log(factorial(2))