function dailyTemperatures(temperatures: number[]): number[] {
    const res = Array.from({ length: temperatures.length }, () => 0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        
        while (stack.length && t > stack.at(-1)[0]) {
            const [, tempIdx] = stack.pop();
            res[tempIdx] = i - tempIdx
        }
        stack.push([t, i]);
    }
    return res;
};