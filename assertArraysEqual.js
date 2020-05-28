const eqArrays = function(arry1,arry2) {
  // if arrays are of different length, return false
  if (arry1.length !== arry2.length) {
    return false;
  } else {
    for (let i = 0; i < arry1.length; i++) {
      // return false if  both arrays differ by an element
      if (arry1[i] !== arry2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arry1,arry2) {
  const result = eqArrays(arry1,arry2);
  result ? console.log(`✅✅✅ Assertion Passed: ${arry1} === ${arry2}`) : console.log('🛑🛑🛑 Assertion Failed: ${arry1} !== ${arry2}');
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2], [1, 2, 3]); // =>uld fail
assertArraysEqual([1, 2, 4], [1, 2, 3]); // => shofail
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should]