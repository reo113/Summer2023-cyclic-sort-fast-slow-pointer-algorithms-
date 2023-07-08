//Set B #6

nums = [1,1,1];
nums2 = [1,2,3];
nums3=[2,2,3,4,4,5,7];
nums4=[7,1,3,10,1,5,2,9,2,6,8,5,4];

function subArray(ary, k){


        let count=0;
        for(let i=1;i<ary.length;i++){
            let j=i-1;//slow pointer
            //let correctIndex = ary[i] - 1;
    
            //Checks to see if the sum equals k, or if the whole element itself equals k which then increases the counter.
            if(ary[i]+ary[j]==k){
             count++;
             if(ary[i]=k){
                count++;
            }
            }

          
        }
       //Returns the number of potential instances of k.
       return count;
    
}

console.log(subArray(nums,2));
console.log(subArray(nums2,3));
console.log(subArray(nums3,7));

//Exports the function to be used in other files.
module.exports ={ subArray};