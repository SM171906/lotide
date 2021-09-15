const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }

};
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
