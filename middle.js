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
      midArray.push(array[(array.length - 2)/ 2]);
      midArray.push(array[((array.length - 2)/ 2) + 1]);
    } else if (array.length % 2 !== 0){
      midArray.push(array[(array.length - 1)/ 2]);
    }
    return midArray;
  
}

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
