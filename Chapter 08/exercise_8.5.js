let str = 'I love JavaScript'
const vowels = ['a', 'e', 'i', 'o', 'u']

vowels.forEach(vowel => {
  let replacer = vowels.indexOf(vowel).toString()

  str = str.replaceAll(vowel, replacer)
})

console.log(str)