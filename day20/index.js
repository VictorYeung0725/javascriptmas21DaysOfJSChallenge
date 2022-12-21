import podcasts from './data.js';

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

//NOTE my answers BUG no fully familliar with map and filter when to use which one first
// function getFreePodcasts(data) {
//   let freePodcasts = data.map((podcasts) => {
//     if (podcasts.paid === false) {
//       return podcasts;
//     }
//   }).filter()
// }

//NOTE second try 
// BUG why do i have to use () for returning a object 
function getFreePodcasts(data) {
  let filterFreePod = data.filter((item) => item.paid === false);

  return filterFreePod.map((podcasts) => ({
    title: podcasts.title,
    rating: podcasts.rating,
    paid: podcasts.paid,
  }));
}


//NOTE others 
// const getFreePodcasts = data => data.filter(pod=>!pod.paid).map(p => ({title:p.title,rating:p.rating,paid:p.paid}))




console.log(getFreePodcasts(podcasts));
