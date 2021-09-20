const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3,4]", () => {
    assert.deepEqual(middle([1, 2, 3,4]), [2, 3]);
  });
});
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
