function longestPalindrome(s: string): number {
    const map = new Map();
    let len = 0;
    
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
        if (map.get(c) % 2 === 0)
            len += 2;
    }
    for (const v of map.values()) {
        if (v % 2 !== 0) {
            len += 1
            break;
        }
    }
    return len
};