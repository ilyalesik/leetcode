/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = {};
    for (let i = 0; i < n; i++) {
        const left = i === n ? generate(i) : generateParenthesis(i);
        const right = i === 0 ? generate(n - i) : generateParenthesis(n - i);
        if (left.length === 0 && right.length !== 0) {
            for (let k2 = 0; k2 < right.length; k2++) {
                result[right[k2]] = true;
            }
        }
        if (left.length !== 0 && right.length === 0) {
            for (let k1 = 0; k1 < left.length; k1++) {
                result[left[k1]] = true;
            }
        }
        for (let k1 = 0; k1 < left.length; k1++) {
            for (let k2 = 0; k2 < right.length; k2++) {
                result[left[k1] + right[k2]] = true;
            }
        }
    }
    return Object.keys(result);
};

function generate(n) {
    if (n === 0) {
        return []
    } else if (n === 1) {
        return ["()"]
    } else {
        const previous = generateParenthesis(n - 1);
        const result = {};
        for (let i = 0; i < previous.length; i++) {
            result["(" + previous[i] + ")"] = true;
            result[previous[i] + "()"] = true;
            result["()" + previous[i]] = true;
        }
        return Object.keys(result);
    }
}

module.exports = generateParenthesis;
