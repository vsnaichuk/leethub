function minEatingSpeed(piles: number[], h: number): number {
    let lo = 1, hi = Math.max(...piles);
    let res = hi;
    
    while (lo <= hi) {
        let k = Math.floor(lo + (hi - lo) / 2);
        let hours = 0;
        for (let p of piles) {
            hours += Math.ceil(p / k);
        }
        if (hours <= h) {
            res = Math.min(res, k);
            hi = k - 1;
        } else {
            lo = k + 1;
        }
    }
    return res;
};