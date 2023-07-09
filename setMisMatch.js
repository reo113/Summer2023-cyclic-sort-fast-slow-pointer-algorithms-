//Set A #3
//The constraints of the problem is that we are give an array with values from
//1-n. An issue occured where one number got duplicated and took the spot of another
//number in the sequence.(There is only one duplicate).
//There is no specified order meaning that we may have to sort the array using cyclic sort.
//Commenters on leetcode also stated the the order matters and that their solutions with a predetermined
//order was incorrect.
//To correct this potential issue we used the cyclic sort algo to sort the array while searching
//for the duplicate value.

const test = [1, 2, 3, 3, 5];
const test2 = [1, 1, 3, 4];
const test3 = [1, 2, 3, 4, 5, 5, 7];
const test4 = [7, 5, 5, 4, 3, 2, 1];

function setMisMatch(ary) {
  const tempary = [];

  //This functions still follow O(n) notation due to the loops not being nested
  //Cyclic algo loop
  for (let i = 1; i < ary.length; i++) {
    let j = i - 1; // slow pointer
    // get the proper index for the element
    const correctIndex = ary[j] - 1;

    // If the current value is not located at its correct index, swap the values
    if (ary[j] !== ary[correctIndex]) {
      [ary[j], ary[correctIndex]] = [ary[correctIndex], ary[j]];
    }
  }
  //Finds the dupe and the missing number
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] !== i + 1) {
      tempary.push(ary[i]); // The duplicated number
      tempary.push(i + 1); // The missing number
      break;
    }
  }

  return tempary;
}

console.log(setMisMatch(test));
console.log(setMisMatch(test2));
console.log(setMisMatch(test3));
console.log(setMisMatch(test4));

module.exports = { setMisMatch };
