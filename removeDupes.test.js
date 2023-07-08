const {removeDupes}=require("./removeDupes");

describe("removeDupes", () => {
    test("[1,1,2,3,4] => [1,2,3,4]==4", () => {
    
      expect(removeDupes([1,1,2,3,4])).toEqual(4);
    });
  
    test("[1,2,3,4,5,5,6] => [1,2,3,4,5,6]==6", () => {
    
        expect(removeDupes([1,2,3,4,5,5,6])).toEqual(6);
      });
  })