const assertEqual = require('./assertEqual');

const head = function(arry) {
  if (arry.length === 0) {
    return undefined;
  } else {
    return arry[0];
  }

};

module.exports = head;
