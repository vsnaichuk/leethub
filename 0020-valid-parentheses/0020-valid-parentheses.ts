function isValid(s: string): boolean {
    const n = s.length;
    const stack = [];
    const map = new Map([
        [")", "("],
        ["}", "{"],
        ["]", "["]
    ]);
    
    for (let i = 0; i < n; i++) {
        if (map.has(s[i])) {
            if (stack.at(-1) !== map.get(s[i]))
                return false;
            else stack.pop()
        } else {
            stack.push(s[i])            
        }
    }
    return stack.length === 0;
};