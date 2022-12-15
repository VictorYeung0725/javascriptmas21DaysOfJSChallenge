/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

//NOTE my answer
function isPalindrome(str) {
  // ([...str].reverse().join('') === str) ? true : false;
  let backward = str.split('').reverse().join('');
  console.log(backward);
  // backward === str ? true : false;
  if (backward === str) {
    return true;
  }
  return false;
}

//NOTE1 others

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

//NOTE2 others
function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed ? true : false;
}

//NOTE 3 others

// check using advanced string/array functions
function isPalindrome(str = '') {
  return [...str].reverse().join('') == str;
}

// check using loop mechanism
function isPalindrome_loopy(str = '') {
  const half = str.length / 2;
  for (let i = 0, j = str.length - 1; i < half; ++i, --j) {
    if (str[i] != str[j]) {
      return false;
    }
  }
  return true;
}

// Test your function
console.log(isPalindrome('abba'), isPalindrome_loopy('abba'));
console.log(isPalindrome('civic'), isPalindrome_loopy('civic'));
console.log(isPalindrome('octopus'), isPalindrome_loopy('octopus'));
console.log(isPalindrome('pumpkins'), isPalindrome_loopy('pumpkins'));
console.log(isPalindrome('madam'), isPalindrome_loopy('madam'));
console.log(isPalindrome('madamimadam'), isPalindrome_loopy('madamimadam'));
console.log(isPalindrome('tacocat'), isPalindrome_loopy('tacocat'));
console.log(isPalindrome('palindrome'), isPalindrome_loopy('palindrome'));
console.log(isPalindrome(''), isPalindrome_loopy(''));
console.log(isPalindrome(), isPalindrome_loopy());

// Test your function
console.log(isPalindrome('abba'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('octopus'));
console.log(isPalindrome('pumpkins'));
console.log(isPalindrome('madam'));
