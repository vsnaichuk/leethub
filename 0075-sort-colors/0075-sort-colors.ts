/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for (let i = 0; i < nums.length; ++i) {
        for (let k = 0; k < nums.length - 1 - i; ++k) {
            if (nums[k+1] < nums[k]) {
                [nums[k], nums[k+1]] = [nums[k+1], nums[k]]
            }
        }   
    }    
};