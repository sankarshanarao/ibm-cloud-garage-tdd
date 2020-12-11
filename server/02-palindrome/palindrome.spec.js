let isPalindrome = text => {
  if(text === '') throw new Error('empty strings are not palindromes');

  if(text.trim() === '') return false;
  
  return text === text.split('').reverse().join('');
}

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

  it("true for mom mom", () => {
    expect(isPalindrome('mom mom')).toBe(true);
  });

  it("false for dad mom", () => {
    expect(isPalindrome("dad mom")).toBe(false);
  });

  it("true for whitespace", () => {
    expect(isPalindrome("     ")).toBe(false);
  });

  it("error for empty string", () => {
    expect(() => {
      isPalindrome('');
    }).toThrowError('empty strings are not palindromes');
  });


  it.todo("error for not a string");
});
