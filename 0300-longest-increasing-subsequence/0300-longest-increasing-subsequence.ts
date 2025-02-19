function lengthOfLIS(nums: number[]): number {
    const values: number[] = [];
    const n = nums.length
    let result = -1;
    for(let i = 0; i < n; i++) {
        values[i] = 1;
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]){
                values[i] = Math.max(values[i], values[j]+1);
            }
        }
        result = Math.max(result, values[i]);
    }
    return result;
};