const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arry1,arry2) {
  const result = eqArrays(arry1,arry2);
  result ? console.log(`✅✅✅ Assertion Passed: [${arry1}] === [${arry2}]`) : console.log(`🛑🛑🛑 Assertion Failed: 
  [${arry1}] !== [${arry2}]`);
};

module.exports = assertArraysEqual;