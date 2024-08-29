function findDisappearedNumbers(nums: number[]): number[] {
    const numsSet = new Set(nums);
    const res = []
    
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) {
            res.push(i)
        }
    }
    return res;
};