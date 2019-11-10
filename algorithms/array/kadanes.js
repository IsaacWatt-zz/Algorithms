
/**
 * Finds the largest sum contiguous subarray (an empty array is a subarray)
 * @param  {Array} numbers is an array of numbers
 * @return {Number} largest contiguous subarray sum 
 * 
 * @runtime O(n)
 * @space O(1)
*/
let kadanes = function(numbers) {
    let n = numbers.length;
    let maxSoFar = 0, maxEndingHere = 0;

    for (let number of numbers) {
        maxEndingHere = Math.max(0, maxEndingHere + number);
        maxSoFar = Math.max( maxSoFar, maxEndingHere );
    }   
    
    return maxSoFar;
}

module.exports = { kadanes };