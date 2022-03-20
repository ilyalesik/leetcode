const letterCombinations = require(".");

test("23", () => {
    const result = letterCombinations("23");
    expect(result.sort()).toMatchObject(["ad","ae","af","bd","be","bf","cd","ce","cf"].sort());
});

test("2", () => {
    const result = letterCombinations("2");
    expect(result).toMatchObject(["a","b","c"]);
});

test("empty", () => {
    const result = letterCombinations("");
    expect(result).toMatchObject([]);
});
