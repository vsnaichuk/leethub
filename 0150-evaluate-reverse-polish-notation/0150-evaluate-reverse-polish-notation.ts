function evalRPN(tokens: string[]): number {
    const n = tokens.length;
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        const t = tokens[i];
        switch (t) {
            case "+": {
                stack.push(stack.pop() + stack.pop())
                break;
            }
            case "-": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b)
                break;
            }
            case "*": {
                stack.push(stack.pop() * stack.pop())
                break;
            }
            case "/": {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(Math.trunc(a / b))
                break;
            }
            default:
                stack.push(Number(t))
        }
    }
    return stack[0]
};