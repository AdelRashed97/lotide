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

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const eqObjects = function(obj1,obj2) {
  // Compares if two objects are equal and return boolean.
  // Objects are equal if they same keys and values.

  // test if both objects have the same number of keys and same key name

  const keys1 = Object.keys(obj1); // keys of object 1
  const keys2 = Object.keys(obj2); // keys of object 2

  // test for number of keys
  if (keys1.length !== keys2.length) {
    console.log('lenght');
    return false;
  }
  // Now test if both objects have the same key names
  for (let key of keys1) {
    if (! keys2.includes(key)) {
      console.log('names');
      return false;
    }
  }

};


// test case
// test 1: test if both objects have same number of keys and key names;
const ab = { a: "1", b: "2" };
const ba = { c: "2" , a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(abc, ab),false); // => true
