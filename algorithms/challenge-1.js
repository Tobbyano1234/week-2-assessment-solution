function missingNumber(numArr) {
  let x = [0,0,0,0,0,0,0,0,0];
  let result = [];
  for (let i = 0; i < numArr.length; i++) {
    x[numArr[i] - 1] = numArr[i];
  }
  for (let i = 0; i < 9; i++) {
    if (x[i] === 0) {
      result.push(i + 1);
      } 
  }
  if (result.length === 0) {
    return false;
  } else if (result.length === 1) {
    return result[0];
  } else {
    return result;
  }
}

module.exports = missingNumber
