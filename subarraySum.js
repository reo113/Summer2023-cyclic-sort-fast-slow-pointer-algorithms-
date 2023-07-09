//Set B #6


function subArray(arr, k) {
  let count = 0;
  let total = 0;
  let end = arr.length - 1;

  for (let i = 0; i <= end; i++) {
    let j = i + 1;
    total = arr[i] + arr[j];
    if (arr[i] === k) count++;
    while (j <= end && total <= k || total >= k) {
      if (total === k) count++;
      total += arr[++j];
    }
  }
  return count;
}

nums = [1, 1, 1];
nums2 = [1, 2, 3];
nums3 = [2, 2, 3, 4, 4, 5, 7];
nums4 = [1, -1, 0];
nums5 = [28,54,7,-70,22,65,-6];
console.log(subArray(nums, 2));
console.log(subArray(nums2, 3));
console.log(subArray(nums3, 7));
console.log(subArray(nums4, 0));
console.log(subArray(nums5, 100));
//Exports the function to be used in other files.
module.exports = { subArray };
