/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const n = nums.length;
    const set = new Set();
    
    for (let num of nums) {
        if (set.has(num)) {
            return true
        }
        set.add(num)
    }
    return false;
};