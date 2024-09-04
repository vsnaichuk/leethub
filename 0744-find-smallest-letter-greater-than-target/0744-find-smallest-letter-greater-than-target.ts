function nextGreatestLetter(letters: string[], target: string): string {
    const n = letters.length
    
    let lo = 0;
    let hi = n
    
    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const midVal = letters[mid];
        
        if (midVal > target) {
            hi = mid
        } else {
            lo = mid + 1
        }
    }
    
    return letters[lo % n]
};