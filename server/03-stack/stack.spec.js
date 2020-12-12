let stackFactory = () => {
  let count = 0;
  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: () => {
      empty = false;
      count++;
    },
    pop: () => {
      empty = true;
      count -= 1;
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

  it.todo("throws overflow error when pushing to a stack at full capacity");
  it.todo("throw underflow error when popping an empty stack");
  it.todo("pops the same one item when pushed");
  it.todo("pops two items with the most recent first");
  it.todo("accepts only a positive capacity");
});
