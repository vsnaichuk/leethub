function maxSubArray(nums: number[]): number {
    let maxSub = nums[0];
    let currSum = 0;
    
    for (const n of nums) {
        if (currSum < 0) {
            currSum = 0;
        }
        
        currSum += n;
        maxSub = Math.max(currSum, maxSub)
    }
    
    return maxSub;
};