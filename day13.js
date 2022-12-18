/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: '😊',
  angry: '😠',
  party: '🎉',
  heart: '💜',
  cat: '🐱',
  dog: '🐕',
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  if (word.startsWith(':') && word.endsWith(':')) {
    word = word.slice(1, -1);
  }
  return emojis[word] || word;
}

function emojifyWord(word) {
  const wordRemovedStartColon = word.startsWith(':') ? word.slice(1) : word;
  const wordRemovedColons = wordRemovedStartColon.endsWith(':')
    ? wordRemovedStartColon.slice(0, -1)
    : wordRemovedStartColon;
  return emojis.hasOwnProperty(wordRemovedColons)
    ? emojis[wordRemovedColons]
    : wordRemovedColons;
}

//NOTE others
// function emojifyWord(word){
//   if (word.startsWith(":") && word.endsWith(":")) word = word.slice(1, -1);
//   return emojis[word] || word;
// }

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(' ')
    .map((item) => emojifyWord(item))
    .join(' ');
}

//NOTE others
function emojifyPhrase(phrase) {
  return phrase.split(' ').map(emojifyWord).join(' ');
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

//NOTE others
function emojifyWord(word) {
  // checking if word start and end with colon
  const startAndEndWithColon = word.startsWith(':') && word.endsWith(':');

  if (startAndEndWithColon) {
    // removing the conlon from starting index and of last index
    const slicedWord = word.slice(1, word.length - 1);

    // finding proper emoji of given word and return emoji if not then returning sliced word
    return emojis[slicedWord] ? emojis[slicedWord] : slicedWord;
  } else return word;
}

function emojifyPhrase(phrase) {
  // convertin the sentence into array then replacing the word with proper emojis
  // then returning the emojify sentence
  return phrase
    .split(' ')
    .map((word) => emojifyWord(word))
    .join(' ');
}
