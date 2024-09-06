function climbStairs(n: number): number {
    let one = 0, two = 1;
    for (let i = 0; i <= n; i++) {
      let temp = one
      one = temp + two;
      two = temp
    }
    return one;
};