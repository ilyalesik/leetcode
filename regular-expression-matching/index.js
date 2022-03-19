const isMatchSymbol = function(symbol, cursor) {
    if (cursor === ".") {
        return true;
    }
    return symbol === cursor;
}

var isMatch = function(s, p) {
    const dp = [];
    for (let i = 0; i < s.length + 1; i++) {
        dp.push([]);
        for (let j = 0; j < p.length + 1; j++) {
            dp[i].push(false);
        }
    }

    dp[0][0] = true;

    for (let i = 1; i < p.length + 1; i++) {
        if (p[i - 1] === "*") {
            dp[0][i] = dp[0][i-2]
        }
    }

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < p.length + 1; j++) {
            if (isMatchSymbol(s[i-1], p[j-1])) {
                dp[i][j] = dp[i-1][j-1]
            } else if (p[j - 1] === '*') {
                if (isMatchSymbol(s[i - 1], p[j - 2])) {
                    dp[i][j] = dp[i-1][j] || dp[i][j - 2]
                } else {
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }

    return dp[s.length][p.length];
};
module.exports = isMatch;
