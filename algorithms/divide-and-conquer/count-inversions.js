/**
 * Merges two sorted arrays and returns inversion count
 * 
 * @param  {Array} A array of numbers
 * @param  {Number} start index where first array begins
 * @param  {Number} mid index where first array ends
 * @param  {Number} end index where second array ends
 * @return {Number} number of inversions in the specified subarray of A
 * 
 * @runtime O(n)
 * @space O(1)
*/

var mergeInversions = function(A, tmp, start, mid, end) {

    let i = start; // index for left sub array
    let j = mid; // index for right sub array
    let k = start; // index for resulting merged sub array
    let count = 0;
     
    // merge A[start ... mid-1] and A[mid ... end] into tmp 
    while ((i < mid) && (j <= end)) {  
        if (A[i] <= A[j]) {
            tmp[k++] = A[i++];
        } else {
            tmp[k++] = A[j++];  

            // since A[i] > A[j] then everything in A[i+1 ... mid - 1] are also
            // greater than A[j]
            count += (mid - i);
        }
    }

    // copy remaining elements of left subarray into tmp
    while (i <= mid - 1) 
        tmp[k++] = A[i++];  

    // copy remaining elements of right subarray into tmp
    while (j <= end) 
        tmp[k++] = A[j++];  
    
    // place results of merge back into A so that A[start ... end] is sorted 
    for (i = start; i <= end; i++)
        A[i] = tmp[i];  
  
    return count; 
}

/**
 * Counts the number of inversions in an array
 * An inversion occurs when a[i] > a[j] and i < j 
 * @param  {Array} A array of numbers
 * @return {Number} number of inversions present in A
 * 
 * @runtime O(nlogn)
 * @space O(n)
 * 
*/

var countInversions = function(A) {
    let n = A.length;

    // intermediate array used in the process of sorting
    let tmp = new Array(n).fill(0);

    let mergeSortInv = function(A, tmp, start, end) {
        let count = 0;
        if (start < end) {
            let mid = Math.floor((start + end)/2);
    
            // count inversions on left and right half
            count = mergeSortInv(A, tmp, start, mid);
            count += mergeSortInv(A, tmp, mid + 1, end);
    
            // count number of pairs (a_i, a_k) such that a_i is on left half, 
            // a_k is on right half and a_i > a_k 
            count += mergeInversions(A, tmp, start, mid + 1, end);
        }
        return count;
    }

    return mergeSortInv(A, tmp, 0, n - 1);
}

module.exports = { countInversions };