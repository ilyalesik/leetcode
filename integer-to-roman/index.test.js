const intToRoman = require('.');

test("3", () => {
    expect(intToRoman(3)).toEqual("III");
});

test("58", () => {
    expect(intToRoman(58)).toEqual("LVIII");
});

test("1994", () => {
    expect(intToRoman(1994)).toEqual("MCMXCIV");
});
