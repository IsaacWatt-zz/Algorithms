/**
 * searches for a particular element in a given sorted array
 * @param  {Array} elements is an array of elements
 * @param  {Any} target is an element to be searched for in elements
 * @return {Number} index of an occurrence of target in elements or -1 if target does not exist in elements
 * 
 * Note: If elements in elements are uniformly distributed then runtime is O(loglogn)
 * Note: calculation of pos is well explained in the following medium post: 
 * https://medium.com/@smellycode/demystifying-interpolation-formula-for-interpolation-search-211780c43269
 * 
 * @runtime O(n)
 * @space O(1)
 * 
*/
let interpolationSearch = function(elements, target) {
    let n = elements.length;
    let left = 0; 
    let right = n - 1; 
    
    while (left < right && target >= elements[left] && target <= elements[right]) {
        
        let pos = left + Math.floor(
            ( right - left ) * ( target - elements[left] ) / ( elements[right] - elements[left] )
        );

        if (elements[pos] == target) return pos; 
        else if (elements[pos] < target) left = pos + 1; 
        else right = pos - 1;
    }

    if (left == right && elements[left] == target) return left; 
    return -1;
}

module.exports = { interpolationSearch };
