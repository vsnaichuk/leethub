function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const map = new Map();

    for (const n of s) {
        map.set(n, (map.get(n) || 0) + 1)
    }

    for (const n of t) {
        if (map.has(n)) {
            map.set(n, map.get(n) - 1)
            if (map.get(n) === 0) {
                map.delete(n)
            }
        } else {
            return false
        }
    }
    return true;
};