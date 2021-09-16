const eqObjects = function (object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  let retVal = false;
  if (object1Keys.length === object2Keys.length) {
    for (let i = 0; i < object1Keys.length; i++) {
      if (object1[object1Keys[i]] !== object2[object2Keys[i]]) {
        retVal = false;
      } else {
        return true;
      }
    }
  }
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};


const ab = { a: "1", b: "2" };

const abc = { a: "1", b: "2", c: "3" };

//console.log(eqObjects(ab, abc));
(assertObjectsEqual(ab, abc));

const cd = { c: "1", d: 2 };
const dc = { c: "1", d: 2 };
(assertObjectsEqual(cd, dc));