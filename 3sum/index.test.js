const threeSum = require('.');

test("[-1,0,1,2,-1,-4]", () => {
    const result = threeSum([-1,0,1,2,-1,-4]);
    console.log(result);
    expect(result.length).toEqual(2);
});
