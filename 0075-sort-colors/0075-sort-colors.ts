/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - 1 - i; k++) {
            if (nums[k] > nums[k+1]) {
                const temp = nums[k];
                nums[k] = nums[k+1];
                nums[k+1] = temp
            }
        }    
    }
};