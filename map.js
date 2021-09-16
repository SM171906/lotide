
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
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    
    results.push(callback(item)); 
  }
  return results;
  // temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  // return results;
}

// const results1 = map(words, word => word[0]);

// console.log(results1);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3] );
assertArraysEqual(map(words, word => word.length),[1, 2, 3] );