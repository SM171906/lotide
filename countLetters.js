const assertEqual = function(actual, expected) {
  if(actual === expected){
    return (`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
  };

  const countLetters = function(lettersToCount){
    const results = {}
   for(letter of lettersToCount){
     
      if (results[letter] && letter !== ' '){
       results[letter] += 1;
      } else if (letter !== ' ') {
        results[letter] =1;
      }
     
   }
   return results;
  }
   //console.log(assertEqual(countLetters("lighthouse in the house"), {l:1, i:2, g:1, h:4, t:2, o:2, u:2, s:2, e:3, n:1}));

   console.log(countLetters("lighthouse in the house"));
  //console.log(countLetters(results));
  