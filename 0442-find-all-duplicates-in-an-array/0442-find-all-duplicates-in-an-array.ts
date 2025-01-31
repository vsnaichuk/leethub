function findDuplicates(nums: number[]): number[] {
    const res = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] < 0) {
            res.push(x);
        }
        nums[x - 1] *= -1;
    }
    return res;
};