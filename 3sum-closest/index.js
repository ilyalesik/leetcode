/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minimum = Number.MAX_SAFE_INTEGER;
    let minimumValue;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (Math.abs(nums[i] + nums[j] + nums[k] - target)  < minimum) {
                    minimum = Math.abs(nums[i] + nums[j] + nums[k] - target);
                    minimumValue = nums[i] + nums[j] + nums[k];
                }
            }
        }
    }
    return minimumValue;
};

module.exports = threeSumClosest;
