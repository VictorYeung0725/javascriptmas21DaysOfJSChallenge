// day10: sort array with letter

function sortByLength(strs) {
  const sortArr = strs.sort((a, b) => {
    console.log(a, b);
    if (a.length - b.length > 0) {
      return 1;
    } else {
      return -1;
    }
  });
  return sortArr;
}

console.log(sortByLength(['abc', '', 'aaa', 'a', 'zz']));
