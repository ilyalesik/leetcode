/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const lettersMapping = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    let result;
    for (let i = 0; i < digits.length; i++) {
        result = mergeLetters(lettersMapping[digits[i]], (result || [""]))
    }
    return result || [];
};

function mergeLetters(a1, a2) {
    const result = [];
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            result.push(a2[j] + a1[i])
        }
    }
    return result;
}

module.exports = letterCombinations;
