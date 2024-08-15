class MinStack {
  stack: Array<number>;
  minStack: Array<number>;

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);

    if (this.minStack.length === 0) {
        this.minStack.push(val);
    } else {
        this.minStack.push(Math.min(this.minStack.at(-1), val));
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack.at(-1);
  }

  getMin(): number {
    return this.minStack.at(-1);
  }
}