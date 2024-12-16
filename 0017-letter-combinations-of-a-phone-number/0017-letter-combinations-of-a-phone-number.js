/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const phoneMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const output = [];
    backtrack("", digits, phoneMap, output);
    return output;

    function backtrack(combination, nextDigits, phoneMap, output) {
        if (nextDigits.length === 0) {
            output.push(combination);
        } else {
            const letters = phoneMap[nextDigits[0] - '2'];
            for (const letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1), phoneMap, output);
            }
        }
    }
};