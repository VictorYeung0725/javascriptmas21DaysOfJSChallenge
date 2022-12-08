import products from './data.js';

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

let shoppingCart = [];

//NOTE 1 my own version

// function getSaleItems(data) {
//   data.map((each) => {
//     if (each.type === 'sweet') {
//       const { item, price } = each;
//       console.log(item, price);
//       let shoppingItem = {
//         item: item,
//         price: price,
//       };
//       shoppingCart.push(shoppingItem);
//     }
//   });
//   return shoppingCart;
// }

// getSaleItems(products);
// console.log(shoppingCart);

// checkSweet(products);

// NOTE 2 Others Work on this challenge

// function getSaleItems(data){
//     let sweetsArr = data.filter((item)=>{
//         return item.type === "sweet"
//     }).map((sweet)=>{
//         return {item: sweet.item,
//                 price: sweet.price}
//     })

//     return sweetsArr
// };

// console.log(getSaleItems(products))
