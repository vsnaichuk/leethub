function validMountainArray(arr: number[]): boolean {
    const n = arr.length;
    
    if (n < 3) 
        return false;
    
    let pivot = false;
    for (let i = 1; i < n - 1; i++) {
        const prev = arr[i-1];
        const curr = arr[i];
        const next = arr[i+1];
        
        if (curr > prev && curr > next) 
            pivot = true;
        else if (prev >= curr && curr <= next) 
            return false;
    }
    return pivot;
};