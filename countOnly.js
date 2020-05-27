const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems,itemsToCount) {
  const results = {};
  for (item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        // 
        results[item] = 1;
      }
    }
  }
  


  
  return results;

};



// test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
const result2 = countOnly(firstNames, { "Jason": true, "Karima": false, "Fang": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);