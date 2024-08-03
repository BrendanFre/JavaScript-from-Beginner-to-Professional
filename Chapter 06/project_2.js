let one = ()=> console.log(1);
let two = () => console.log(2);

function three(){
  console.log(3)
  one();
  two()
}

function fourth(){
  console.log(4);
  setTimeout(one, 2)
  setTimeout(three,1)
}

fourth()