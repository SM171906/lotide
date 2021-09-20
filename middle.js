const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};
const middle = function (array) {
  let midArray = [];

  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array[(array.length - 2) / 2]);
    midArray.push(array[((array.length - 2) / 2) + 1]);
  } else {
    midArray.push(array[(array.length - 1) / 2]);
  }
  return midArray;

}

module.exports = middle;
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
