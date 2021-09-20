
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});



// console.log(head([5, 6, 7]), 5);
// console.log(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// console.log(head([5, 6, 7]), 6);
// console.log(head(["Hello", "Lighthouse", "Labs"]), "Helloo");