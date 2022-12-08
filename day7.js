/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

//NOTE my version : some of the logic wrong 8/12/2022
// BUG to be solved

// function altCaps(str) {
//   let newArr = [];
//   if (typeof str !== 'string') {
//     return (str = '');
//   }
//   let letter = str.split('');
//   console.log(letter);
//   let currentLetter = '';
//   let nextLetter = '';

//   for (let i = 0; i < letter.length; i++) {
//     currentLetter = letter[i];
//     nextLetter = letter[i + 1];
//     if (typeof currentLetter === 'string') {
//       currentLetter.toLocaleUpperCase();
//       newArr.push();
//     }
//     if (typeof nextLetter === 'string') {
//       nextLetter.toLocaleLowerCase();
//       newArr.push();
//     }
//   }
//   return newArr;
// }

// console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'));

//NOTE 2 Others version of solving this challenge

// function altCaps(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     newStr +=
//       i % 2 === 0 ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
//   }
//   return newStr;
// }

// console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'));

// NOTE 3 Others version of solving this challenge

// function altCaps(str) {
//   return str
//     .split('')
//     .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
//     .join('');
// }
// console.log(altCaps("I'm so happy it's Monday"));
// console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'));

// NOTE 4   Others version of solving this challenge

function altCaps(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr +=
      i % 2 === 0 ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
  }
  return newStr;
}

console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'));
