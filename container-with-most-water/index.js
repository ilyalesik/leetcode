/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = (j - i) * Math.min(height[i], height[j]);
            if (area > max) {
                max = area;
            }
        }
    }
    return max;
};

module.exports = maxArea;
