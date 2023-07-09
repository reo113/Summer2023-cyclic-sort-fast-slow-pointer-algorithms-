//test=[3,1,4,4,2];
test = [3, 1, 3, 4, 2];
test2 = [1, 2, 3, 4, 5, 2, 8, 1, 5, 10, 99];

//Set a #5
/**The dupe function you provided aims to find a duplicate number in the given array arr.
 *  It uses an object (obj) to keep track of the count of each number encountered
 * and returns the first duplicate number found. */
//The constraints are that othe array conatains only one dupe.
function dupe(arr) {
  let obj = {};
  //The for loop iterates through the arr array once,
  //which has a time complexity of O(n), where n is the length of the array.
  for (let i = 0; i < arr.length; i++) {
    // if arr[i] exists as a key in obj and returning
    //the duplicate number if found, or adding it to obj if it doesn't.
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
  }
  //If no duplicate number is found during the loop, the function returns -1.
  return -1;
}

//return tempary;

//Set A #2
function findAllDups(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return Object.keys(obj).filter((key) => obj[key] > 1);
}

console.log(dupe(test));
console.log(findAllDups(test2));

module.exports = { dupe, findAllDups };
