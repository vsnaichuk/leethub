function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    
    let k = 1; // number of unique elements in nums
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[k-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};