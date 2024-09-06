function canMakeBq(bloomDay: number[], m: number, k: number, day: number) {
    const n = bloomDay.length
    let flowers = 0, bq = 0;
    
    for (let i = 0; i <= n - 1; i++) {
        if (bloomDay[i] <= day) {
            flowers++
            if (flowers === k) {
                bq++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
            
        if (m === bq) {
            return true;
        }
    }
    return false
}

function minDays(bloomDay: number[], m: number, k: number): number {
    if (m * k > bloomDay.length) 
        return -1;
    
    let lo = 1, hi = Math.max(...bloomDay);
    while (lo <= hi) {
        const day = Math.floor(lo + (hi - lo) / 2)
        if (canMakeBq(bloomDay, m, k, day)) {
            hi = day - 1            
        } else {
            lo = day + 1
        }
    }
    return lo;
};