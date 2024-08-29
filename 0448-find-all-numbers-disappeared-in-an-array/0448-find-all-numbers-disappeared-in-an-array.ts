// [4,3,2,7,8,2,3,1]

function findDisappearedNumbers(nums: number[]): number[] {
    for (const n of nums) {
        const idx = Math.abs(n) - 1; // idx based on value (convert value to index)
        
        if (nums[idx] > 0)
            nums[idx] = -1 * nums[idx] // mark as negative to indicate that number                                            // corresponding to this index has been found 
    }
    
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1) // add +1 since arrays 0-based
        } 
    }
    return res;
};