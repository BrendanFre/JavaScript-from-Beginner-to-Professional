let value = '1000';

(()=>{
  let value;
  console.log(value)
})();

let result = (()=>{
  let result = 43;
});

console.log(`result: ${result}`);

(function(val) {
  console.log(`This is the value: ${val}`)
})('lawrence')