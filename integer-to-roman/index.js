/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    let x1 = num % 10;
    let x2 = Math.floor(num / 10 % 10);
    let x3 = Math.floor(num / 100 % 10);
    let x4 = Math.floor(num / 1000);

    return convert4(x4, "M") + convert(x3, "C", "D", "M") + convert(x2, "X", "L", "C") + convert(x1, "I", "V", "X");
};

function convert(x, l1, l2, l3) {
    switch (x) {
        case 1: {
            return l1
        }
        case 2: {
            return l1 + l1
        }
        case 3: {
            return l1 + l1 + l1
        }
        case 4: {
            return l1 + l2
        }
        case 5: {
            return l2;
        }
        case 6: {
            return l2 + l1
        }
        case 7: {
            return l2 + l1 + l1
        }
        case 8: {
            return l2 + l1 + l1 + l1
        }
        case 9: {
            return l1 + l3
        }
    }
    return ""
}

function convert4(x, l) {
    let result = "";
    for (let i = 0; i < x; i++) {
        result += l;
    }
    return result;
}

module.exports = intToRoman;
