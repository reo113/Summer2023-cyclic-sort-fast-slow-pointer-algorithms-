//Set B #6
    // Pseudo code:
    // Initialize a count variable to keep track of the number of subarrays that sum up to k
    // Initialize a total variable to store the current sum of elements in the subarray
    // Set the end variable to the last index of the array
function subArray(arr, k) {
    let count = 0;
    let total = 0;
    let end = arr.length - 1;
    for (let i = 0; i <= end; i++) {
      // Set j to the next index of i
      let j = i + 1;
      // Calculate the initial total by adding the current element and the next element
      total = arr[i] + arr[j];
      
      // Check if the current element itself is equal to k
      if (arr[i] === k)
        count++;
      
      // Continue iterating while j is within the array bounds and the total is less than or equal to k
      // or greater than k
      while (j <= end && (total <= k || total >= k)) {
        // If the total is equal to k, increment the count
        if (total === k)
          count++;
        
        // Increment j and add the next element to the total
        total += arr[++j];
      }
    }
  
    // Return the count of subarrays that sum up to k
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
