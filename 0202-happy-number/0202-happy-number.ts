// tortoise and hare algorithm
function isHappy(n) {
    let slow = n;
    let fast = sumOfNumb(n)
    
    while (slow !== fast) {
        slow = sumOfNumb(slow);
        fast = sumOfNumb(sumOfNumb(fast))        
    }
    
    return slow === 1
}

function sumOfNumb(numb) {
    let sum = 0;
    while (numb) {
        sum += (numb % 10) ** 2
        numb = Math.floor(numb / 10)
    }
    return sum
}