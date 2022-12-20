/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ['💰', '🐟', '🐟'],
  '🏆',
  '💐',
  '💵',
  ['💵', '🏆'],
  ['🐟', '💐', '💐'],
  '💵',
  '💵',
  ['🐟'],
  '🐟',
];

// NOTE my answer
function flatten(arr) {
  // return arr.flat(2);
  let falttenArr = [];
  for(let item of arr){
    if(item.length > 0){
      for(let ele of item){
        falttenArr.push(ele)
      } 
    } else {
      falttenArr.push(item);
    }
  }
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

// NOTE others
function flatten(arr, builtInConvert = true) {
  if (!builtInConvert) {
    let holder = [];
    for (let a of arr) {
      if (a.length > 0) {
        for (let aa of a) {
          holder.push(aa);
        }
      } else {
        holder.push(a);
      }
    }
    return holder;
  }
  return arr.flat();
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
console.log(flatten(kittyPrizes, false));
console.log(flatten(kittyScores, false));

// NOTE others
function flatten(arr) {
  // return arr.flat()
  const flatArr = [];
  arr.forEach((item) => {
    Array.isArray(item) ? flatArr.push(...flatten(item)) : flatArr.push(item);
  });

  return flatArr;
}
