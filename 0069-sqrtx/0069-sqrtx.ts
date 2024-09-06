function mySqrt(x: number): number {
    if (x === 0 || x === 1) {
        return x;
    }
    
    let lo = 1, hi = x, res = 0;
    
    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        
        if (mid * mid === x) {
            return mid
        } else if (mid * mid > x) {
            hi = mid - 1
        } else {
            lo = mid + 1
            res = mid
        }
    }
    return res
};