
const tail = function(arry) {
  if (arry.length === 0 || arry.length === 1) {
    return [];
  } else {
    return arry.slice(1);// return a new array starting with the second element
  }
};

module.exports = tail;