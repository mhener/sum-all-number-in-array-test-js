function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }
  return sum;
}
module.exports = sumItems;