//BUG to be fixed why ternary operator didn't work? am i writing the wrong syntas ?
// did not return anything, thus the function return undefined
//NOTE My answer
function candies(children, candy) {
  //  write code here.
  return candy > children ? Math.floor(candy / children) * children : candy;
}

console.log(candies(10, 1));
console.log(candies(3, 10));
console.log(candies(1, 1));

//NOTE others

// function candies(children, candy) {
//   //  write code here.
//   if (candy > children) {
//     return Math.floor(candy / children) * children;
//   } else {
//     return candy;
//   }
// }

//NOTE others
// const candies = (children, candy) => candy - (candy % children);
