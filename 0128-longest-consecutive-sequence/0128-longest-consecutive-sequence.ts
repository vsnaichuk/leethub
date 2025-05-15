function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let length = 1;

            while (numSet.has(n + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }
    return longest;  
};