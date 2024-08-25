function validMountainArray(arr: number[]): boolean {
    let pivot = false;
    
    for (let i = 1; i < arr.length - 1; i++) {
        const curr = arr[i];
        const prev = arr[i-1]
        const next = arr[i+1]
        
        if (curr > prev && next < curr) {
            pivot = true
        } else if (prev >= curr && next >= curr) {
            return false
        }
    }

    return pivot
};