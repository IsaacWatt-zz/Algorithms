/**
 * sorts an array of numbers (stable)
 * @param  {Array} A is an array of numbers
 * @return {Array} array A, sorted
 * 
 * @runtime O(n^2)
 * @space O(1)
*/
let insertionSort = function(A) {
    let n = A.length; 
    let key, currPos;

    for(let i = 1; i < n; ++i) {
        key = A[i];
        // insert key into sorted A[0...i-1]

        currPos = i - 1; 
        // search A[0 ... i-1] from right to left (which is sorted)
        // for position in array such that key >= A[currPos]
        // this is the location where key should live
        while (currPos >= 0 && key < A[currPos]) {
            A[currPos + 1] = A[currPos];
            --currPos;
        }
        
        A[currPos + 1] = key;
    }

    return A;
}

module.exports = { insertionSort };