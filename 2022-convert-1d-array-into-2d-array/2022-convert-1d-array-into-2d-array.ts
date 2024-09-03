//https://platformalgorithmsdatastructures.kingofinterviews.com/docs/Arrays/convert1DArrayInto2DArray

function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length !== m*n) return [];
    
    const res: Array<number[]> = Array(m).fill(0).map(() => {
        return Array(n).fill(0)
    });
    
    for (let i = 0; i < original.length; i++) {
        const row = Math.floor(i / n)
        const col = i % n
        res[row][col] = original[i]
    }
    return res;
};