function canMakeBq(bloomDay: number[], m: number, k: number, day: number) {
    let total = 0;
    let flowers = 0;

    for (let b of bloomDay) {
        if (b <= day) {
            flowers++
            if (flowers === k) {
                total++
                flowers = 0
            }
        } else {
            flowers = 0
        }

        if (total === m) {
            return true;
        }
    }
    
    return false;
}

function minDays(bloomDay: number[], m: number, k: number): number {
    if (bloomDay.length < (m * k)) {
        return -1
    }

    let lo = 0
    let hi = Math.max(...bloomDay)

    do {
        const mid = Math.floor(lo + (hi - lo) / 2)

        if (!canMakeBq(bloomDay, m, k, mid)) {
            lo = mid + 1
        } else {
            hi = mid
        }
    } while (lo < hi)

    return lo
};