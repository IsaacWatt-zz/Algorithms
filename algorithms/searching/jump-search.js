/**
 * searches for a particular element in a given sorted array
 * @param  {Array} elements is an array of elements
 * @param  {Any} target is an element to be searched for in elements
 * @return {Number} index of an occurrence of target in elements or -1 if target does not exist in elements
 * 
 * @runtime O(√n)
 * @space O(1)
 * 
*/
let jumpSearch = function(elements, target) {
    let n = elements.length; 
  
    // block size to be jumped 
    // (√n is an optimal jump size)
    let step = Math.floor(Math.sqrt(n)); 

    // start and end indices of range which target (may) belong to
    let start = 0, end = step; 

    // jump through the sorted list searching for a block in which
    // the element may be present
    while ( elements[ Math.min(end, n) -1 ] < target ) { 
        // jump to next block
        start = end;
        end += step;

        // if the next block is out of range
        // then target is not in elements
        if (start > n) return -1;
    } 

    // linear search the current block for target
    while ( start < Math.min(end, n) ) {
        if (elements[start] == target) return start; 
        ++start;
    }
    
    return -1; 
}

module.exports = { jumpSearch };