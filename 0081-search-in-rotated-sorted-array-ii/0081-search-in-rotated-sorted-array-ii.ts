function search(nums: number[], target: number): boolean {
    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] === target) return true;

        if (nums[lo] === nums[mid]) {
            lo++;
            continue;
        }

        if (nums[lo] <= nums[mid]) {
            if (nums[lo] <= target && target <= nums[mid]) hi = mid - 1;
            else lo = mid + 1;
        } else {
            if (nums[mid] <= target && target <= nums[hi]) lo = mid + 1;
            else hi = mid - 1;
        }
    }
    return false;
};