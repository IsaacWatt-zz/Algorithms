/**
 * partitions the input array by chosing the last element as a pivot and positioning 
 * elements in the array such that elements < pivot are placed before pivot and 
 * and elements > pivot are placed after
 * @param  {Array} A an array of numbers
 * @param  {Number} low position in A to begin partitioning
 * @param  {Number} high position in A to end partitioning
 * @return {Number} returns the index where the pivot is positioned after partitioning
 * 
 * @runtime O(high-low)
 * @space O(1)
*/
let partition = function(A, low, high) {
    let pivot = A[high]; 
    let i = low - 1; 

    for (let j = low; j < high; ++j) {
        if (A[j] <= pivot) {
            ++i; 
            [A[i], A[j]] = [A[j], A[i]]; 
        }
    }

    [A[i+1], A[high]] = [A[high], A[i+1]];
    return i + 1;
}   

/**
 * sorts an array of numbers (not stable)
 * @param  {Array} A is an array of elements
 * @param  {Number} low index in A to begin sorting at
 * @param  {Number} high index in A to end sorting at
 * @return {Array} array A, sorted
 * 
 * @runtime O(nlogn)
 * @space O(logn) stack space
*/
let quickSort = function(A, low = 0, high = A.length - 1) {
    
    if (low < high) {
        let q = partition(A, low, high); 
        quickSort(A, low, q - 1);
        quickSort(A, q + 1, high);
    }

    return A;
}   

module.exports = { quickSort };