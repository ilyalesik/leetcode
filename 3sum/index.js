/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const resultMap = {};
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        numsMap[nums[i]] = [...(numsMap[nums[i]] || []), i];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
                const requiredValue = 0 - nums[i] - nums[j];

                if (numsMap[requiredValue] && numsMap[requiredValue].find((k) => k !== i && k !== j)) {
                    const sequence = [nums[i], nums[j], requiredValue];
                    const predicate = (item) => {
                        return isEqual(item, sequence);
                    };
                    if (!(resultMap[nums[i]] || []).find(predicate) && !(resultMap[nums[j]] || []).find(predicate) && !(resultMap[requiredValue] || []).find(predicate)) {
                        resultMap[nums[i]] = [...(resultMap[nums[i]] || []), sequence];
                    }
                }
        }
    }
    return Object.values(resultMap).reduce((prev, current) => {
        return [...prev, ...current]
    }, []);
};

function isEqual(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) < 0) {
            return false;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.indexOf(nums2[i]) < 0) {
            return false;
        }
    }
    return true;
}

module.exports = threeSum;
