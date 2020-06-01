const assert = require("chai").assert;

const head = require('../head');


describe("test head.js",function () {
  it("should return undefined if input is empty array",function() {
    const result = head([]);
    assert.isUndefined(result);
  });

  it("should return the first element of an array if input is non-empty array",function() {
    const result = head([5,6,7,8]);
    const expectedResult = 5;
    assert.equal(result,expectedResult);
  });
});