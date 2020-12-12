let stackFactory = () => {
  let count = 0;
  let element;
  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: (ele) => {
      if (count === 2) throw new Error('capacity overflow error');
      element = ele;
      count++;
    },
    pop: () => {
      if (count === 0) throw new Error('capacity underflow error');
      empty = true;
      count -= 1;
      return element;
    },
  };
};

let stack;

describe("the stack canary spec", () => {
  it("shows the infrastructure works", () => {
    expect(true).toBe(true);
  });
});

describe("a stack", () => {
  beforeEach(() => {
    stack = stackFactory();
  });

  it("starts empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("starts with stack size of 0", () => {
    expect(stack.size()).toBe(0);
  });

  it("is not empty when pushed", () => {
    stack.push();
    expect(stack.isEmpty()).toBe(false);
  });

  it("stack size is 1 when pushed", () => {
    stack.push();
    expect(stack.size()).toBe(1);
  });

  it("stack is empty when pushed and popped", () => {
    stack.push();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("stack size is 0 when pushed and popped", () => {
    stack.push();
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it("throws overflow error when pushing to a stack at full capacity", () => {
    stack.push();
    stack.push();
    expect(() => {
      stack.push();
    }).toThrowError('capacity overflow error');
  });

  it("throw underflow error when popping an empty stack", () => {
    expect(() => {
      stack.pop();
    }).toThrowError('capacity underflow error');
  });

  it("pops the same one item when pushed", () => {
    stack.push('a');
    expect(stack.pop()).toBe('a');
  });

  it.todo("pops two items with the most recent first");
  it.todo("accepts only a positive capacity");
});
