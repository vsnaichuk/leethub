function search(nums, target) {
    let lo = 0
    let hi = nums.length
    
    do {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = nums[m]
        
        if (target === v) {
            return m
        } else if (target > v) {
            lo = m + 1
        } else {
            hi = m
        }
        
    } while (lo < hi)
        
    return -1
}