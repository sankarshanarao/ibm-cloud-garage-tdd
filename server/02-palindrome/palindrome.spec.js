let isPalindrome = text => text === text.split('').reverse().join('');

describe("the palindrome canary spec", () => {
  it("shows the infrastructure works", () => {
    expect(true).toBe(true);
  });

  it("true for mom", () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it("false for dude", () => {
    expect(isPalindrome('dude')).toBe(false);
  });

  it.todo("true for mom mom");
  it.todo("false for dad mom");
  it.todo("true for whitespace");
  it.todo("error for empty string");
  it.todo("error for not a string");
});
