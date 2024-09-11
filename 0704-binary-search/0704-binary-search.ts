function search(nums: number[], target: number): number {
    let lo = 0, hi = nums.length - 1;
    
    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const midVal = nums[mid];
        
        if (midVal === target) {
            return mid;
        } else if (midVal > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1
        }
    }
    
    return -1;
};