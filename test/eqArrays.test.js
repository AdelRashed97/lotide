//test case
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), true); // => should fail
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should fail
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), true); // => should fail