const { twoSum } = require("./twosum");

//For some reason the "test" keyword was not working here so i used "it".

describe("twoSum", () => {
  it("[2,7,11,15] => 9==[1,2]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("[1,2,4,6,8,10] => 7==[1,4]", () => {
    expect(twoSum([1, 2, 4, 6, 8, 10], 7)).toEqual([1, 4]);
  });
});
