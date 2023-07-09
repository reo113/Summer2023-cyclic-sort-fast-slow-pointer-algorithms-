const { dupe, findAllDups } = require("./duplicate");

describe("dupe/findAllDups", () => {
  it("Finds the dupe and returns it.", () => {
    expect(dupe([3, 1, 3, 4, 2])).toEqual(3);
  });

  it("[1,2,3,4,5,5,6] => [1,2,3,4,5,6]==6", () => {
    expect(findAllDups([1, 2, 3, 4, 5, 2, 8, 1, 5, 10, 99])).toEqual([
      "1",
      "2",
      "5",
    ]);
  });
});
