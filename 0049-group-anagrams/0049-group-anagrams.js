/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};

        for (let s of strs) {
            let count = Array(26).fill(0); // a..z

            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            let key = count.join('#');
            (res[key] ??= []).push(s);
        }

        return Object.values(res);
};