const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  for(let letter of string) {
    if (letter !== " "){
      console.log(letter);

    }
    
  }
}

// test case
countLetters("lighthouse in the house");