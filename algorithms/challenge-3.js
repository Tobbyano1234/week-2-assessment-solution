function increment(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]["val"] += value;
    
  }
  return arr;
}
module.exports = increment
