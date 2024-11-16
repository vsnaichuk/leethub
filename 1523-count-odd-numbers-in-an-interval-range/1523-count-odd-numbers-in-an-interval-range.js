/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
    const diff = high - low;
    const counts = (diff + addCounts(low, high)) / 2;
    return counts;
};

function addCounts(low, high) {
    const bothOdd = isOdd(low) && isOdd(high);
    const oneOdd = isOdd(low) || isOdd(high);
    if (bothOdd) {
        return 2;
    } else if (oneOdd) {
        return 1;
    } else {
        return 0;
    }
}

function isOdd(num) {
    return num % 2 === 1
};