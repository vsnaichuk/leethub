function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let result = [];
    let i = 0;
    let j = 0;
	
    while (i < firstList.length && j < secondList.length) {
        const low = Math.max(firstList[i][0], secondList[j][0]);
        const high = Math.min(firstList[i][1], secondList[j][1])
        
        if (low <= high) {
            result.push([low, high]);
        }
        
        if (firstList[i][1] < secondList[j][1]) i++;
        else j++;
    }
    
    return result;
};