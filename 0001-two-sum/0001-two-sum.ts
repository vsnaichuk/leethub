function twoSum(nums: number[], target: number): number[] {
    const n = nums.length;
    const map = new Map();
    
    for (let i = 0; i < n; i++) {
        const val = nums[i];
        const x = target - val;
        if (map.has(x)) {
            return [map.get(x), i]
        }
        map.set(val, i);
    }
    return []    
};