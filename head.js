const assertEqual = function(actual, expected) {
  if(actual === expected){
    return (`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
  };
function head(valArray) {
   return valArray [0];
 }

  // TEST CODE
  console.log(assertEqual(head([5,6,7]), 5));
  console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
  console.log(assertEqual(head(["hi"]), "hi"));
  console.log(assertEqual(head([]), undefined));
  // console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
  // console.log(assertEqual(1, 1));
  
  //console.log(`Assertion Passed: [${actual}] === [${expected}]` + assertEqual(actual, expected));
  //console.log("Assertion Failed: [actual] !== [expected]");