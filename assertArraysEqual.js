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