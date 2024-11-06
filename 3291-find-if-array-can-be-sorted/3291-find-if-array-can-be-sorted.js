/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let curMin = nums[0];
    let curMax = nums[0];
    let prevMax = -Infinity;

    for (let n of nums) {
        if (countBits(n) === countBits(curMin)) {
            curMin = Math.min(curMin, n);
            curMax = Math.max(curMax, n);
        } else {
            if (curMin < prevMax) {
                return false;
            }
            prevMax = curMax;
            curMin = n;
            curMax = n;
        }
    }

    return !(curMin < prevMax);
};

function countBits(n) {
    return n.toString(2).split("1").length - 1
}