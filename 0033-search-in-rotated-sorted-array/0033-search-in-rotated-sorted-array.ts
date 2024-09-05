function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return mid; // found target
        }
        
        // left sorted portion
        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        // right sorted portion
        } else {
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1;                
            } else {
                l = mid + 1;
            }
        }
    }

    // if target not found
    return -1;
};