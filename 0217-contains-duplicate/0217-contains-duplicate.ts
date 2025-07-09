function containsDuplicate(nums: number[]): boolean {
    const set = new Set();

    for (const n of nums) {
        if (set.has(n)) {
            return true
        }
        set.add(n);
    }
    return false
};