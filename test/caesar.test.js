const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
  it("If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
    const invalidShifts = [0, -26, 26, undefined, null, false];
    invalidShifts.forEach((shift) => {
      const actual = caesar("example", shift, true);
      expect(actual).to.equal(false);
    });
  });
  it("If a letter is shifted so that it goes off the alphabet , it should wrap around to the front of the alphabet", () => {
    const actual = caesar("z", 3);
    expect(actual).to.equal("c");
  });
  it("Spaces should be maintained throughout, as should other nonalphabetic symbols", () => {
    const actual = caesar("! a", 1);
    expect(actual).to.equal("! b");
  });
  it("Should ignore capitilzation", () => {
    const actual = caesar("AbC", 1);
    expect(actual).to.equal("bcd");
  });
});
