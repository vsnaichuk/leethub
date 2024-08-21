function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    const freq = new Array(nums.length + 1).fill(0).map(() => []);
    
    for (let n of nums) {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1);
    }
    
    for (let [n, count] of map.entries()) {
        freq[count].push(n)
    }
    
    const res = [];
    for (let i = nums.length; i > 0; i--) {
        for (let n of freq[i]) {
            res.push(n);
            if (res.length === k) 
                return res;
        }
    }
    return res;
};