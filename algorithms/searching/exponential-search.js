/**
 * searches for a particular element in a given sorted array
 * @param  {Array} elements is an array of elements
 * @param  {Any} target is an element to be searched for in elements
 * @return {Number} index of an occurrence of target in elements or -1 if target does not exist in elements
 * 
 * @runtime O(logn)
 * @space O(1)
 * 
*/
let exponentialSearch = function(elements, target) {
    let n = elements.length;
    if (n == 0) return -1; 
    let binarySearch = (require("./binary-search")).binarySearch;

    // find range for binary search
    let i = 0; 
    while (i < n && elements[i] <= target) i = 2 ** i;

    // we know that target (if it exists in elements)
    // must lie within [i/2, min(i, n-1)]
    return binarySearch(elements, target, Math.floor(i/2), Math.min(i, n - 1)); 
}

module.exports = { exponentialSearch };