/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  let arr = word.split('');
  arr[0] = arr[0].toUpperCase();
  arr = arr.join('');
  return arr;
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(' ')
    .map((world) => capitalizeWord(world))
    .join(' ');
}

// Test your functions
console.log(capitalizeWord('pumpkin'));
console.log(toTitleCase('pumpkin pranced purposefully across the pond'));

//NOTE
// const capitalizeWord = word => word.slice(0, 1).toUpperCase() + word.slice(1);
// const capitalizeWord = (word) => word[0].toLocaleUpperCase() + word.slice(1);
// const toTitleCase = (str) =>
//   str
//     .split(' ')
//     .map((word) => capitalizeWord(word))
//     .join(' ');

// // Test your functions
// console.log(capitalizeWord('pumpkin'));
// console.log(toTitleCase('pumpkin pranced purposefully across the pond'));
// console.log(toTitleCase('everything everything, everywhere, all at once'));
// console.log(toTitleCase('raccoon rakun raccoon raccoonski'));
// console.log('raccoon'[0].toLocaleUpperCase());
