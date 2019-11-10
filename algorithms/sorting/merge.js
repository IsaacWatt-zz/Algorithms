/**
 * merges two intervals (start to mid and mid+1 to end) and sorts the interval 
 * @param  {Array} A is an array of elements
 * @param  {Array} temp array used to story intermediate results
 * @param  {Number} start is the index of the start of the interval
 * @param  {Number} mid is the index of the middle of the interval
 * @param  {Number} end is the index of the end interval
 * @return {Array} 
 * 
 * @runtime O(nlogn)
 * @space O(1)
 */
 let merge = function(A, temp, start, mid, end) {
    
    // traversal variables for intervals and temp
    let i = start;
    let j = mid + 1;
    let k = start;
  
    // traverse temp and A
    // each iteration add min of both elements into temp 
    while(i <= mid && j <= end) 
        temp[k++] = A[A[i] <= A[j] ? i++ : j++];
    
    // copy left over items from left array
    while(i <= mid) 
        temp[k++] = A[i++];

    // copy left over items from right array
    while(j <= end) 
        temp[k++] = A[j++];
  
    // copy elements from temp into start
    for(let i = start; i <= end; ++i) 
        A[i] = temp[i];
}

/**
 * sorts an array of numbers (stable)
 * @param  {Array} A is an array of elements
 * @param  {Number} start position in A to begin sorting
 * @param  {Number} end position in A to end sorting
 * @param  {Array} temp array used to story intermediate results
 * @return {Array} array A, sorted
 * 
 * @runtime O(nlogn)
 * @space O(n) + O(logn) [stack space] 
 *        = O(n)
*/
let mergeSort = function(A, start = 0, end = A.length - 1, temp = undefined) {
    let mid = Math.floor((end + start)/2);
    if (temp == undefined) temp = new Array(A.length);
    
    if (start < end) {
      mergeSort(A, start, mid);
      mergeSort(A, mid+1, end);
      merge(A, temp, start, mid, end);
    }

    return A;
}

module.exports = { mergeSort };