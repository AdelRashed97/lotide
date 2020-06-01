const assert = require("chai").assert;
const middle = require("../middle");

// test cases
// assertArraysEqual(middle([1]) , []);
// assertArraysEqual(middle([1,2]) , []);
// assertArraysEqual(middle([1,2,3]) , [2]);
// assertArraysEqual(middle([1,2,3,4]) , [2,3]);

// assertArraysEqual(middle(['bob']) , []);
// assertArraysEqual(middle(['bob','jack']) , []);
// assertArraysEqual(middle(['bob','jack','sam']) , ['jack']);
// assertArraysEqual(middle(['bob','jack','sam','mike']) , ['jack','sam']);

describe("test middel.js",function() {
  it("should return empty array if the input is empty array",function() {
    assert.isEmpty(middle([]));
  });
  it("should return empty array if the input is an array with one element",function() {
    assert.isEmpty(middle([1]));
  });

  it("should return empty array if the input is an array with two element",function() {
    assert.isEmpty(middle([1,2]));
  });

  it("should return the middle value if the input is an array with more than two elements and  an odd length",function() {
    const result = middle([1,2,3,4,5]);
      const expectedResult = 3;
    assert.equal(result,expectedResult);
  });

  it("should return the two middle values if the input is an array with more than two elements and  an even length",function() {
    const result = middle([1,2,3,4,5,6]);
    const expectedResult = [3,4];
    assert.deepEqual(result,expectedResult);
  });

}
  
);

