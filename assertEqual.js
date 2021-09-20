// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if(actual === expected){
  return (`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
} else {
  return (`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
}

};



//console.log(`Assertion Passed: [${actual}] === [${expected}]` + assertEqual(actual, expected));
//console.log("Assertion Failed: [actual] !== [expected]");
module.export= assertEqual;