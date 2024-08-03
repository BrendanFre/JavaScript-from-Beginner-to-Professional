let start = 10;

function countdown(val) {
  console.log(val);
  if(val < 0){
  } else {
    return countdown(val - 1);
  }
}

countdown(start);

function loop(val){
  if(val > 0) {
    val--
    return countdown(val);
  }
}

loop(start)