/**
 * sorts an array of numbers (stable)
 * @param  {Array} A is an array of numbers
 * @return {Array} array A, sorted
 * 
 * @runtime O(n^2)
 * @space O(1)
 * 
*/
let bubbleSort = function(A) {
    let n = A.length;

    for (let i = 0; i < n; ++i) {
        let hasSwapped = false;

        for (let j = 0; j < n - i - 1; ++j) {
            // elements A[n - i, ..., n] are sorted

            if (A[j] > A[j+1]) {
                // swap A[j] and A[j+1]
                [A[j], A[j+1]] = [A[j+1], A[j]]; 
                hasSwapped = true;
            }
        }

        // no j satisifed A[j] > A[j+1] hence the array is sorted
        if (!hasSwapped) break;
    }

    return A;
}

module.exports = { bubbleSort };