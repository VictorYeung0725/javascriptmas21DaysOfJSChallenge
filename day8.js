function validTime(str) {
  let arr = str.split(':');
  if (parseInt(arr[0]) >= 0 && parseInt(arr[0]) <= 23) {
    if (parseInt(arr[1]) >= 0 && parseInt(arr[1]) <= 59) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
// return (result[0]<= 23 && result[0] >= 0 && result[1] <= 59 && result[1] >=0) ? true :false;

//NOTE 1
// function validTime(str) {
//     const timeArray = str.split(':');
//     if (Number(timeArray[0]) >= 0 && Number(timeArray[0]) <= 24) {
//         if (Number(timeArray[1]) >= 0 && Number(timeArray[1]) <=59) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return false
//     }
// }

//NOTE 2
// function validTime(str) {
//     const [ hour, min ] = str.split(":").map(val => parseInt(val));
//     return (hour >= 0 && hour <= 23) && (min >= 0 && min <= 59);
// }

/**
 * Test Suite
 */
describe('validTime()', () => {
  it('returns true for valid time', () => {
    // arrange
    const str = '13:58';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
    // arrange
    const str = '25:51';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
    // arrange
    const str = '02:76';

    // act
    const result = validTime(str);

    // log
    console.log('result 1: ', result);

    // assert
    expect(result).toBe(false);
  });
});
