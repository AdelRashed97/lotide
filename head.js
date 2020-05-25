const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arry) {
  if (arry.length === 0) {
    return undefined;
  } else {
    return arry[0];
  }

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([ "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([5,6]), "Hello");