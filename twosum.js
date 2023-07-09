//FInds and returns the positions of the two numbers that add up to the target
//If no numbers are found it returns an empty array.
//The constraints are that were given
//an array of integers numbers that is already sorted in ascending order.
//We Return the indices of the two numbers, index1 and index2,
//added by one as an integer array [index1, index2] of length 2.
//Set B #2

test = [2, 7, 11, 15];

function twoSum(ary, target) {
  let left = 0; //start of index
  let right = ary.length - 1; //end of index

  while (left < right) {
    const sum = ary[left] + ary[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++; //increases since the target was larger than the sum
    } else {
      right--; //decreases since the sum was larger than the target
    }
  }

  // No solution found
  return [];
}

module.exports = { twoSum };

console.log(twoSum(test, 9));
console.log(twoSum([1, 2, 4, 6, 8, 10], 7));
