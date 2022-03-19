const maxArea = require('.');

test("[1,8,6,2,5,4,8,3,7]", () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
});
