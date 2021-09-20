const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.lenght) {
    for (i = 0; i > array.length; i++) {
      if (arr1[i] !== arr2[i]) {
       return false;
      }
    }
  }
  return true;
}
module.exports = eqArrays;