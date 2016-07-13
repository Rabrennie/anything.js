/**
 * Sorts an array in a slow fashion.
 * @param {Array} A - The array to be slowly sorted.
 * @param {number} i - the letter 'i'.
 * @param {number} j - that black guy's name from MIB.
 * @author Vitor Cortez <vitoracortez+github@gmail.com>
 * @see {@link http://www.mipmip.org/tidbits/pasa.pdf}
 */
var slowSort = function(A, i, j) {
  if (i >= j)
    return;
  else {
    let m = Math.floor((i+j)/2);
    slowSort(A, i, m);
    slowSort(A, m + 1, j);
    if (A[m] > A[j]) {
      let temp = A[m];
      A[m] = A[j];
      A[j] = temp;
    }
    slowSort(A, i, j - 1);
  }
};

anything.prototype.slowSort = slowSort;
