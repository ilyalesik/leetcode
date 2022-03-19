const isMatchSymbol = function(symbol, cursor) {
    if (cursor === ".") {
        return true;
    }
    return symbol === cursor;
}

const findInFuture = function(symbol, p) {
    for (let i = 0; i <= p.length; i++) {
        if (!isMatchSymbol(symbol, p[i]) && p[i] !== '*' && p[i+1] !== '*') {
            return;
        }
        if (isMatchSymbol(symbol, p[i])) {
            return i;
        }
    }
}

var isMatch = function(s, p) {
    let pCursor = 0;

    for (let i=0; i < s.length; i++) {
        if (p[pCursor + 1] === "*") {
            if (!isMatchSymbol(s[i], p[pCursor])) {
                pCursor += 2;
                i = i - 1;
            }
        } else if (p[pCursor + 1] !== "*") {
            if (!isMatchSymbol(s[i], p[pCursor])) {
                return false;
            }
            pCursor += 1;
        }
        if (i === s.length - 1) {
            if (p[pCursor + 1] === "*") {
                if (pCursor < p.length - 2) {
                    return false;
                }
            } else if (pCursor < p.length - 1) {
                return false
            }
        }
    }

    return true;
};
module.exports = isMatch;
