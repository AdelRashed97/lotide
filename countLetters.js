const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (letter !== " ") {
      //console.log(letter);
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
      //console.log(results);

    }
    
  }
  return results;
};

// test case
let result = countLetters("lighthouse in the house");

assertEqual(result['l'],1);
assertEqual(result['e'],3);
assertEqual(result['k'],undefined);
