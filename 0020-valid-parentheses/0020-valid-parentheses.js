/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const closeToOpen = { 
        ")":"(",
        "]":"[",
        "}":"{"
    }
    
    for (const char of s) {
        const openChar = closeToOpen[char];
        const hasCorresponding = openChar === stack[stack.length - 1]

        if (stack.length && hasCorresponding) {
            stack.pop();
        } else {
            stack.push(char)
        }
    }
    
    return stack.length === 0 
};