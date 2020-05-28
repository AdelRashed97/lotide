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
  result ? console.log(`✅✅✅ Assertion Passed: [${arry1}] === [${arry2}]`) : console.log(`🛑🛑🛑 Assertion Failed: 
  [${arry1}] !== [${arry2}]`);
};


const middle = function(arry) {
  const arryLen = arry.length;// calaculates array length
  if (arryLen === 0 || arryLen === 1 || arryLen === 2) {
    return [];
  } else {
    if (arryLen % 2 === 0) {
      // array has an even length, then return the two middle elements at indx1 and indx2
      // indx1=indx2 -1
      const indx2 = arryLen / 2;
      return [ arry[indx2 - 1] , arry[indx2] ];
    } else {
      return [arry[Math.floor(arryLen / 2)]];
    }
  }

};
// test cases
assertArraysEqual(middle([1]) , []);
assertArraysEqual(middle([1,2]) , []);
assertArraysEqual(middle([1,2,3]) , [2]);
assertArraysEqual(middle([1,2,3,4]) , [2,3]);

assertArraysEqual(middle(['bob']) , []);
assertArraysEqual(middle(['bob','jack']) , []);
assertArraysEqual(middle(['bob','jack','sam']) , ['jack']);
assertArraysEqual(middle(['bob','jack','sam','mike']) , ['jack','sam']);

