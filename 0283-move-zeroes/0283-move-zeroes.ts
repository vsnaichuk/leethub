/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let l = 0;
    
    for (const n of nums) {
        if (n !== 0) {
            nums[l] = n;
            l++;
        }
    }

    for (let i = l; i < nums.length; i++) {
        nums[i] = 0
    }
};