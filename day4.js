/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// const whisper = (sentence) => {
//   const addSound = 'shh...';
//   const newSentence = addSound + sentence.toLowerCase();
//   const lastCharEnd = newSentence.endsWith('!');
//   if (lastCharEnd === true) {
//     const removedLastChar = newSentence.slice(0, -1);
//     return removedLastChar;
//   } else {
//     return newSentence;
//   }
// };

//NOTE 1
// function whisper(sentence) {
//   if(typeof sentence === 'string') {
//       return `shh... ${sentence.replace(/!$/g,'').toLowerCase()}`
//   }
// }

//NOTE 2

// const whisper = (message) => {
//   let whisperedMessage = `shh... ${message.toLocaleLowerCase()}`;
//   if (message.endsWith('!')) {
//     return whisperedMessage.slice(0, whisperedMessage.length - 1);
//   }
//   return whisperedMessage;
// };

//NOTE 3

// function whisper(sentence) {
//   function removeLastExclamationPointIfPresent(sentence) {
//       return sentence.endsWith('!')
//           ? sentence.substring(0, sentence.length - 1)
//           : sentence;
//   }
//   return `shh... ${removeLastExclamationPointIfPresent(sentence).toLowerCase()}`;
// }

//NOTE 4

// This is more concise but AFAIK it would create a new string so memory is O(2n).
// Inspired by https://discord.com/channels/684009642984341525/1048297683674222652/1048752780363440149
function whisper2(sentence) {
  return `shh... ${sentence.replace(/!$/, '').toLowerCase()}`;
}

console.log(whisper('PLEASE STOP SHOUTING!'));
console.log(whisper("MA'AM, this is a Wendy's!"));
