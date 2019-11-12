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
let binarySearch = function(elements, target) {
    let n = elements.length;
    let left = 0; 
    let right = n - 1; 
    
    while (left <= right) {
        let mid = Math.floor( left + ((right - left) / 2) );
        if (elements[mid] === target) return mid;
        else if (elements[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

module.exports = { binarySearch };
