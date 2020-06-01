const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj,callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
// // test cases
// // test 1
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// assertEqual(result1,"noma");

// // test 2
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKey(bestTVShowsByGenre, movie => movie === "The Wire"), "drama");
// assertEqual(findKey(bestTVShowsByGenre, movie => movie === "That '70s Show"), undefined);