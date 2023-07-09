const { subArray } = require("./subarraySum");

describe("subArray", () => {
  test("[2,2,3,4,4,5,7] => 2", () => {
    expect(subArray([2, 2, 3, 4, 4, 5, 7], 7)).toEqual(3);
  });

  test("[1,2,3] => 2", () => {
    expect(subArray([1, 2, 3], 3)).toEqual(2);
  });
});
