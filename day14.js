//NOTE my answer
function countVowelConsonant(str) {
  // write code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let sumArr = str.split('').map((char) => {
    vowels.includes(char) ? 1 : 2;
  });

  let count = sumArr.reduce((acc, curr) => {
    acc + curr;
  }, 0);

  return count;
}

console.log(countVowelConsonant('abc'));

// let sumArr = str.split('').map((char) => {
//   char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
//     ? 1
//     : 2;
// });

//NOTE others
function countVowelConsonant(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .reduce((acc, letter) => acc + (vowels.includes(letter) ? 1 : 2), 0);

  // Using regex instead of checking if the letter is in a vowel array
  // return str.split('').reduce((acc, letter) => acc + (/[aeiou]/.test(letter) ? 1 : 2), 0)
}

//NOTE others
function countVowelConsonant(str) {
  // write code here
  const regex = /[aeiou]/;
  const arr = str.split('');
  const sum = arr.reduce((acc, val) => {
    return val.match(regex) !== null ? acc + 1 : acc + 2;
  }, 0);
  return sum;
}
