/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        const curr = nums[i]
        const x = target - curr;
        
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(curr, i);
    }
};