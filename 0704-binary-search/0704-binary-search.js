/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2)
        const val = nums[mid];
        if (target === val) {
            return mid;
        } else if (target > val) {
            lo = mid + 1;
        } else {
            hi = mid - 1
        }
    }

    return -1
};