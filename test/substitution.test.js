
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution()", () => {
  it("Should return false if alphabet isnt exactly 26 characters long", () => {
    const actual = substitution("not", "working");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Should return false if non unique characters are present in alphabet", () => {
    const actual = substitution("answer", "willbefalsebecausenotuniqu");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("Spaces should be maintained thorughout", () => {
    const actual = substitution(
      "word with spaces",
      "abcdefghijklmnopqrstuvwxyz"
    );
    const expected = "word with spaces";
    expect(actual).to.equal(expected);
  });
  it("If encode is false, it should return a translated message", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("Should ignore capitalization", () => {
    const actual = substitution("ABC", "xoyqmcgrukswaflnthdjpzibev")
    const expected = "xoy"
    expect(actual).to.equal(expected)
  })
  it("Alphabet and input should be able to take in special characters (!@#$%^&,etc)", ()=>{
    const actual = substitution("&rufscpw", "xoyqmcgrukswaflnthd&pzibev", false)
    const expected = "thinkful";
    expect(actual).to.equal(expected)
  })
  it("Should return special characters excluded from alphabet", () => {
    const actual = substitution("jxo", "xoyqmcgrukswaflnthd&pzibev", false)
    const expected = "jab";
    expect(actual).to.equal(expected) 
  })
});
