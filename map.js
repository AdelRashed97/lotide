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



const map = function(array,callBack) {
  let mapArray = [];
  for (let item of array) {
    mapArray.push(callBack(item));
  }
  return mapArray;
};

module.exports = map;

// assertArraysEqual(map([2,3,4,5],x => x + 2),[4,5,6,7]);
// assertArraysEqual(map([2,3,4,5],x => x ** 2),[4,9,16,25]);
// assertArraysEqual(map(["sam","jack","bob","charles"],x => "hello " + x),["hello sam","hello jack","hello bob","hello charles"]);
// console.log(map(["sam","jack","bob","charles"],x => "hello " + x));