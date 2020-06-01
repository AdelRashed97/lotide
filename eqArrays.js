
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

module.exports = eqArrays;


