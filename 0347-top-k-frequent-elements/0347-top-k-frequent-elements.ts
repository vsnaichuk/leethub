function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    
    for (const n of nums) {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    }
    
    const freq = new Array(nums.length + 1).fill(0).map(() => []);
    const res: number[] = [];
    
    for (const [n, count] of map.entries()) {
        freq[count].push(n)
    }
    
    for (let i = nums.length; i > 0; i--) {
        for (const n of freq[i]) {
            res.push(n)
            if (res.length === k) 
                return res
        }
    }
    
    return [];
};