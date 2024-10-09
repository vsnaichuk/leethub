function groupAnagrams(strs: string[]): string[][] {
    const map = {}
    
    for (const s of strs) {
        const count = new Array(26).fill(0);
        
        for (const c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        
        let key = count.join('#');
        (map[key] ??= []).push(s);
    }
    
    return Object.values(map);
};