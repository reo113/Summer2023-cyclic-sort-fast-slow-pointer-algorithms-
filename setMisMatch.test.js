const { setMisMatch } = require("./setMisMatch");

describe("setMisMatch", () => {
  test("FInds the dupe num and the missing num", () => {
    expect(setMisMatch([1, 2, 3, 3, 5])).toEqual([3, 4]);
  });

  test("FInds the dupe num and the missing num", () => {
    expect(setMisMatch([1, 1, 3, 4])).toEqual([1, 2]);
  });

  test("Finds the dupe num and the missing num in an unsorted array", () => {
    expect(setMisMatch([7, 5, 5, 4, 3, 2, 1])).toEqual([5, 3]);
  });
});
