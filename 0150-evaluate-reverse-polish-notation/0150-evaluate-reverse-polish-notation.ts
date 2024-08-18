function evalRPN(tokens: string[]): number {
    const stack = [];
    
    for (let t of tokens) {
        switch (t) {
            case "+": {
                stack.push((stack.pop() + stack.pop()))
                break;
            }
            case "-": {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b - a)
                break;
            }
            case "*": {
                stack.push((stack.pop() * stack.pop()))
                break;
            }
            case "/": {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b / a))
                break;
            }
            default: {
                stack.push(Number(t))
            }                
        }
    }
    
    return stack[0]
};