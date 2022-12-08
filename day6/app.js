// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

//NOTE 1 my version of the answer
// function getRandomNumberOfTacos() {
//   let randomNum = Math.floor(Math.random() * 10);
//   let trayArr = new Array(randomNum);
//   let fullArr = trayArr.fill('🌮', 0, trayArr.length);
//   console.log(randomNum);
//   console.log(trayArr);
//   console.log(fullArr);
//   /*
//   Make this function return an array that contains
//   between one and ten taco emojis 🌮
//   Use the following JavaScript concepts:
//       - Math.random()
//       - Math.floor()
//       - new Array()
//       - Array.fill()
//   */

//   return [fullArr]; // replace this empty tray array
// }

// function putTacosOnTray() {
//   return getRandomNumberOfTacos()
//     .map(function (taco) {
//       return `<div class="taco">${taco}</div>`;
//     })
//     .join('');
// }

// document.getElementById('tray').innerHTML = putTacosOnTray();

//NOTE 2 others clean code
function getRandomNumberOfTacos() {
  return new Array(Math.floor(Math.random() * 10) + 1).fill('🌮');
}
// LETS GO!!!!!!

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join('');
}

document.getElementById('tray').innerHTML = putTacosOnTray();
