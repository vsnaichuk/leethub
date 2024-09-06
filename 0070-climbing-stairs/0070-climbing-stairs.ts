function climbStairs(n: number): number {
    let a = 1, b = 1;
    for (let i = 0; i < n; i++) {
        const temp = a;
        a = a + b;
        b = temp;
    }
    return b;
};
