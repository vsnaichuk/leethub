function isAnagram(s: string, t: string): boolean {
    // base
    if (s.length !== t.length) {
        return false
    }
    
    const map = new Map();
    
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    
     for (const c of t) {
         if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) map.delete(c)                         
         } else {
             return false;
         }
    }
    
    return map.size === 0;
};