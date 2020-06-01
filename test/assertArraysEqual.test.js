const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2], [1, 2, 3]); // =>uld fail
assertArraysEqual([1, 2, 4], [1, 2, 3]); // => shofail
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => should]