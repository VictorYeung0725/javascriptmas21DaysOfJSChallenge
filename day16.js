//NOTE my answer
function insertDashes(arr) {
  // write code here
  console.log(arr);
  let [first, second] = arr.split(' ');
  console.log(first, second);
  console.log(first.split(''));
  console.log(second.split(''));
  return first.split('').join('-') + ' ' + second.split('').join('-');
}

insertDashes('aba caba');

// output "a-b-a c-a-b-a";

//NOTE others
function insertDashes(arr) {
  return arr
    .split(' ')
    .map((cur) => cur.split('').join('-'))
    .join(' ');
}

//NOTE others
function insertDashes(arr) {
  return arr
    .split('')
    .join('-')
    .replace(/-(\s|-)+-/g, ' ');
}
