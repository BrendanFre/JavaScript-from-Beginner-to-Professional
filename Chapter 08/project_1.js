const word = 'Oliver';

function scramble(theWord) {
  let newWord = "";
  let length = theWord.length;
  for (let i = 0; i < length; i++) {
    let currentLength = theWord.length;
    let target = Math.floor(Math.random() * currentLength);
    console.log(target)
    newWord += theWord.slice(target, target+1);
    let partOne = target > 0 ? theWord.substring(0, target) : "";
    let partTwo = target >= currentLength ? "" : theWord.substring(target+1);

    console.log(partOne + " " + partTwo)
    theWord = theWord.substring(0, target) + theWord.substring(target + 1);
  }
  console.log(`Scrambled: ${newWord} length: ${newWord.length}`);
}

scramble(word)