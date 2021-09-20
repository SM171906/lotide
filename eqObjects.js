const assertEqual = function(actual, expected) {
  if(actual === expected){
    return (`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
  };


  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  let retVal = false;
  if(object1Keys.length === object2Keys.length){
    for(let i = 0; i > object1Keys.length; i++){
      if(object1[object1Keys[i]] !== object2[object2Keys[i]]){
       retVal = false;
      } else {
        retVal = true;
      }
    }
  }
};



const ab = { a: "1", b: "2" };

const abc = { a: "1", b: "2", c: "3" };

//console.log(eqObjects(ab, abc));
 console.log(((eqObjects(ab, abc)), false)); // => false
 const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
 console.log((eqObjects(cd, dc), true));
 //console.log(eqObjects(cd, dc));
 const cd2 = { c: "1", d: ["2", 3, 4] };
 console.log((eqObjects(cd, cd2), false)); // => false  
 //console.log(eqObjects(cd, cd2));