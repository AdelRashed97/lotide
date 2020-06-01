const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");




const eqObjects = function(obj1,obj2) {
  // Compares if two objects are equal and return boolean.
  // Objects are equal if they same keys and values. Values are either primitives or arrays

  // test if both objects have the same number of keys and same key name

  const keys1 = Object.keys(obj1); // keys of object 1
  const keys2 = Object.keys(obj2); // keys of object 2

  // test for number of keys
  if (keys1.length !== keys2.length) {
    
    return false;
  }
  // Now test if both objects have the same key names
  for (let key of keys1) {
    if (! keys2.includes(key)) {
      
      return false;
    }
  }

  // test if the value for each key in one object is the same as the value for that same key in the other object

  for (let key of keys1) {
    // check the type of value stored in key of object1
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      // check if both val1 and val 2 are arrays
      if (!eqArrays(val1,val2)) {
        return false;
      }
      

    } else  {
      // assume both values are of primitive type
      if (val1 !== val2) {
        return false;
      }
      

    }
  }

  return true;
  
};

module.exports = eqObjects;
    
        
// test case
// test 1: test for perimitive values;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2" , a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const ac = { a: "1", c: "2" };
// const ca = { c: "4" , a: "1" };
// assertEqual(eqObjects(ac, ca),false); // => false

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(abc, ab),false); // => false

// // test 2: test for array values;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const dc2 = { d: ["5", 3], c: "1" };
// assertEqual(eqObjects(cd, dc2),false); // => false

// const cd3 = { d: "1", c: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd3),false); // => false