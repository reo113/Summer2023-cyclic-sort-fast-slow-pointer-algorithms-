
nums = [1,1,1];
nums2 = [1,2,3];
nums3=[2,2,3,4,4,5,7];
nums4=[7,1,3,10,1,5,2,9,2,6,8,5,4];




function cyclicSort(nums) {
    let i = 0;
    while (i < nums.length) {
    //The correct index is the value-1 since arrays start at index 0    
      const correctIndex = nums[i] - 1; 
      //If the current value is not loacated at its correct index we will swap the values.
      //i will not be incremented if that is the case so that the loop can check again.
      //
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        //Increments when the element is in its correct position.
        i++;
      }
    }
    return nums;
    //Note:The cyclic sort algo pushes any dupes to the back of the array.
  }
  
// Testing the function
console.log(cyclicSort([3, 1, 5, 4, 2]));  // Output: [1, 2, 3, 4, 5]


console.log(cyclicSort(nums4));