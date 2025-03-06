function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a,b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const localSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(localSum - target) < Math.abs(closest - target)) 
                closest = localSum;
            if (localSum > target) right--;
            else left++;
        }
    }
    return closest; 
};