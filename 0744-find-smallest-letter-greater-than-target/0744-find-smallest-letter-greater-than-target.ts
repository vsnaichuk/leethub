function nextGreatestLetter(letters: string[], target: string): string {
    const n = letters.length
    
    let lo = 0;
    let hi = n - 1
    
    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const midVal = letters[mid];
        
        if (midVal > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    
    return letters[lo % n]
};