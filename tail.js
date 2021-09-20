const assertEqual = require('./assertEqual');

function tail(data){
  return data.slice(1);

}

  const result = tail(["Hello", "Lighthouse", "Labs"]);

console.log(assertEqual(result, ["Lighthouse", "Labs"])); 
module.exports = tail;