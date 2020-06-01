const assert = require("chai").assert;


const tail = require('../tail');




describe("test tail.js",function() {

  it("should return an empty array if the input is empty array",function() {
    assert.isEmpty(tail([]));
  });

  it("should return an empty array if the input is an  array with only one element",function() {
    assert.isEmpty(tail([5]));
  });

  it("should return a new  array without the first element if the input is  array with two or more elements",function() {
    const result = tail([1,2,3,4]);
    const expectedResult = [2,3,4];
    assert.deepEqual(result,expectedResult);
  });

  it("the original array should not be altered",function() {
    const originalArray = [1,2,3,4];
    const result = tail(originalArray);
    assert.deepEqual(originalArray,[1,2,3,4]);
  });






})