function topKFrequent(nums: number[], k: number): number[] {
    const n = nums.length;
    const map = new Map();
    const freq = new Array(n + 1).fill(0).map(() => []);
    const res = [];

    for (const n of nums) {
        map.set(n, (map.get(n) || 0)+ 1)
    }
    for (const [num, count] of map.entries()) {
        freq[count].push(num);
    }
    for (let i = n; i > 0; i--) {
        for (const num of freq[i]) {
            res.push(num)
            if (res.length === k) {
                return res
            }
        }
    }
    return [] 
};