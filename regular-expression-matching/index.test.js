const isMatch = require('.');

test("mississippi / mis*is*ip*.", () => {
    expect(isMatch("mississippi", "mis*is*ip*.")).toBeTruthy();
});

test("mississippi / mis*is*p*.", () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toBeFalsy();
});

test("aab / c*a*b", () => {
    expect(isMatch("aab", "c*a*b")).toBeTruthy();
});

test("aa / a", () => {
    expect(isMatch("aa", "a")).toBeFalsy();
});

test("ab / .*c", () => {
    expect(isMatch("ab", ".*c")).toBeFalsy();
});

test("aa / a*", () => {
    expect(isMatch("aa", "a*")).toBeTruthy();
});

test("aaa / aaaa", () => {
    expect(isMatch("aaa", "aaaa")).toBeFalsy();
});

test("aaa / a*a", () => {
    expect(isMatch("aaa", "a*a")).toBeTruthy();
});

test("aaa / ab*a*c*a", () => {
    expect(isMatch("aaa", "ab*a*c*a")).toBeTruthy();
});
