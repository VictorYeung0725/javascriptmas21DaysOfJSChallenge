//NOTE my answer did not consider the edge case  BUG
// function centuryFromYear(num) {
//   //  write code here.
//   return Math.floor(num / 100);
// }

//NOTE others
// const centuryFromYear = (num) => Math.ceil(num / 100);

//NOTE Others
const centuryFromYear = (num) =>
  num % 100 ? Math.floor(num / 100) + 1 : num / 100;

console.log(centuryFromYear(100));
console.log(centuryFromYear(1000));
console.log(centuryFromYear(1920));
console.log(centuryFromYear(2022));
