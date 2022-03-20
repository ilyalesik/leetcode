const threeSumClosest = require(".");

test("[-1,2,1,-4] / 1", () => {
    const result = threeSumClosest([-1,2,1,-4], 1);
    expect(result).toEqual(2);
});
