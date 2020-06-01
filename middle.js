
const middle = function(arry) {
  const arryLen = arry.length;// calaculates array length
  if (arryLen === 0 || arryLen === 1 || arryLen === 2) {
    return [];
  } else {
    if (arryLen % 2 === 0) {
      // array has an even length, then return the two middle elements at indx1 and indx2
      // indx1=indx2 -1
      const indx2 = arryLen / 2;
      return [ arry[indx2 - 1] , arry[indx2] ];
    } else {
      return [arry[Math.floor(arryLen / 2)]];
    }
  }

};

module.exports = middle;


