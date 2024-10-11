/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];

    for (c of s) {
        stack.push(c)

        if (s.length >= 2 && 
            (stack.at(-2) === "A" && stack.at(-1) === "B") ||
            stack.at(-2) === "C" && stack.at(-1) === "D") {
                stack.pop()
                stack.pop()
        }
    }

    return stack.length;
};