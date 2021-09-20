const assertEqual = function(actual, expected) {
  if(actual === expected){
    return (`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
  };

  // scan the 1st object and return key
  //if no key found return undefined

  const findKeys = function(object, callback){
    let firstKey = Object.keys(object);
    for(let i =0; i < firstKey.length; i++){
     if (callback(object[firstKey[i]])){
      console.log(firstKey[i]);
      return firstKey[i];
     } 
    } 
    return;
  }

  // findKeys({
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }, x => x.stars === 2) // => "noma"

  let object = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  //test cases:
  let actual = findKeys(object, x => x.stars === 2);
  let expected = "noma";
  assertEqual(actual, expected);
  
  let actual2 = findKeys(object, x => x.stars > 3);
  let expected2 = undefined;
  assertEqual(actual2, expected2);
  
  let actual3 = findKeys(object, x => x.stars > 1);
  let expected3 = "Akaleri";
  assertEqual(actual3, expected3);