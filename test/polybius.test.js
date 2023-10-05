const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius", () => {
  it("Should take in a string of numbers and encode them into a string of letters", () => {
    const actual = polybius("abc", true);
    const expected = "112131";
    expect(actual).to.equal(expected);
  });
  it("Should take in a string of letters and decode them into a string of numbers if encode is false", () => {
    const actual = polybius("112131", false);
    const expected = "abc";
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces throughout", () => {
    const actual = polybius("11 2151 ", false);
    const expected = "a be ";
    expect(actual).to.equal(expected);
  });
  it("Capital letters should be ignored.", () => {
    const actual = polybius("ABC");
    const expected = "112131";
    expect(actual).to.equal(expected);
  });
  it("The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.", () => {
    const actual = polybius("42", false);
    const expected = "i/j";
    expect(actual).to.equal(expected);
  });
});

