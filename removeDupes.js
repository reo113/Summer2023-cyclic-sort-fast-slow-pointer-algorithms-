//Set B #1
test1=[1,2,3,4,5,5,6];
test2=[1,1,2,3,4];


  function removeDupes(ary){

    //Started the loop at 1 so that j can equal 0;
    //This will mimic the fast/slow pointer and will remove dupes if ary[i]=ary[j]
    //This works due to the constraints being a sorted array of nums which makes it so that
    //we dont need to worry about the elements position.
    for(let i=1;i<ary.length;i++){
        let j=i-1;

        if(ary[i]==ary[j]){
            //Removes the element from the specified index
          ary.splice(i,1);

        }
    }
  //returns the array's new length
   return ary.length;

  }

  console.log(removeDupes(test2));

  module.exports={removeDupes};