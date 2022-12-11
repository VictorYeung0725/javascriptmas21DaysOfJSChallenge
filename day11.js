/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

// testing case
const title = ':htraE no od ot ffutS';
const messages = [
  'maerc eci yrT',
  'rewoT leffiE tisiV',
  'noom eht ot snamuh etacoleR',
  'egrahc ni stac tuP',
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

// NOTE My answer
function reverseString(arr) {
  // method 1 : by Using the Javascript Built-in method
  //    return arr.split('').reverse().join('')

  // method 2 : by Using backward for-loop;
  let newString = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    newString += arr[i]; // or newString = newString + str[i];
  }
  return newString;

  // mehod 3 : ??? By using recursion ?
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

//BUG When do I use return in map????
function reverseStringsInArray(arr) {
  const correctOrderArr = arr.map((string) => {
    return reverseString(string);
  });
  return correctOrderArr;
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

//NOTE others ways for solving this

function reverseString(arr) {
  let newStr = '';
  for (let i = arr.length; i >= 0; i--) {
    newStr += arr.charAt(i);
  }
  return newStr;
}

function reverseStringsInArray(arr) {
  let newArr = [];
  let array = [...arr];
  arr.forEach((ele) => {
    newArr.push(array[array.length - 1]);
    array.pop();
  });
  return newArr.map((ele) => reverseString(ele));
}

//NOTE Learning recursion

function reverseString(str) {
  if (str === '')
    // This is the terminal case that will end the recursion
    return '';
  else return reverseString(str.substr(1)) + str.charAt(0);
  /* 
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
}
reverseString('hello');
