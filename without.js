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
  result ? console.log('✅✅✅ Assertion Passed: Arrays are Equal') : console.log('🛑🛑🛑 Assertion Failed: Arrays are NOT equal');
};

const without = function(sourceArry,itemsToRemove) {
  // if itemsToRemove is empty ,return original array
  if (itemsToRemove.length === 0) {
    return sourceArry;
  } else {
    let outArry = [];
    for (let element of sourceArry) {
      /* if current element of sourceArry is
      not in itemsTOREmove array, then add it to output array */
      if (!itemsToRemove.includes(element)) {
        outArry.push(element);
      }

    }
    return outArry;
  }
};
// test case
assertArraysEqual(without([1, 2, 3],[]), [1, 2, 3]); // => should PASS
assertArraysEqual(without([1, 2, 3],[2]) ,[1, 2, 3]); // => should PASS
assertArraysEqual(without([1, 2, 3],[2,3]), [1, 2, 3]); // => should PASS

let numbers = [1,2,3,9,8,9,2,9,1];
let numbers2 = without(numbers,[1,2,9]);
console.log(numbers);
console.log(numbers2);
assertArraysEqual(numbers,[1,2,3,9,8,9,2,9,1]);// should pass

const words = ["hello", "world", "lighthouse"];
const words2 = without(words, ["lighthouse"]);
console.log(words);// test that without does not alter original array
console.log(words2);