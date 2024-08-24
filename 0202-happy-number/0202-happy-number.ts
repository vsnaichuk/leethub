function sumOfSquares(n) {
    let res = 0;
    while (n) {
        res += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return res;
}

function isHappy(n) {
    let slow = n;
    let fast = sumOfSquares(n);

    while (slow !== fast) {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    }

    return slow === 1;
}