function search(nums: number[], target: number): number {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const val = nums[mid];
        
        if (val === target) {
            return mid;
        } else if (val < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
};