/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // base case
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    for (const i of s) {
        map.set(i, 1 + (map.get(i) || 0));
    }

    for (const i of t) {
        if (!map.has(i)) {
            return false;
        }

        map.set(i, map.get(i) - 1);

        if (map.get(i) === 0) {
            map.delete(i)
        }
    }

    return map.size === 0;
};