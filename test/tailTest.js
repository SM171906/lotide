const tail = require('../tail.js');
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(words.length, 3); // original array should still have 3 elements!
//assertEqual(tail(words), ["Lighthouse", "Labs"]);
