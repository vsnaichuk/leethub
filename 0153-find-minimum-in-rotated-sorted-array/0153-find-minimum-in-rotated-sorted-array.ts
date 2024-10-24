function findMin(nums: number[]): number {
    let res = nums[0]
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi) {
        if (nums[lo] < nums[hi]) {
            res = Math.min(res, nums[lo])
            break;
        }
        
        let mid = Math.floor(lo + (hi - lo) / 2)
        let midVal = nums[mid]
        res = Math.min(res, midVal)
        
        if (midVal >= nums[hi]) {
            lo = mid + 1;
        } else {
            hi = mid - 1;            
        }
    }
    return res;
};