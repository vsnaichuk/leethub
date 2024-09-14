function peakIndexInMountainArray(arr: number[]): number {
    const n = arr.length
    for (let i = 1; i < n - 1; i++) {
        const curr = arr[i];
        const prev = arr[i-1]
        const next = arr[i+1]
        
        if (curr > prev && next < curr)
            return i;
    }
    return -1
};