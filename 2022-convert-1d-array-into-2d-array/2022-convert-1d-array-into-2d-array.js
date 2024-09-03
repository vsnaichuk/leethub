/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];
  let result = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < original.length; ++i) {
    let row = Math.floor(i / n);
    let column = i % n;
    result[row][column] = original[i];
  }

  return result;
};