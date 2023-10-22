/**
 * Finds the n-th number in the tribonacci sequence
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const k = [0, 1, 1]
    while (n >= k.length) {
        len = k.length
        k.push(k[len - 3] + k[len - 2] + k[len - 1])
    }
    return k[n]
};

anything.prototype.tribonacci = tribonacci
