let kadanes = require('./kadanes').kadanes;

/**
 * Finds the largest sum contiguous subrectangle
 * @param  {Array} numbers is a matrix of numbers of size m*n
 * @return {Number} sum of the largest sum contiguous subrectangle
 * 
 * @runtime O(m*n^2)
 * @space O(m*n)
*/
let largestSumRectangle = function(numbers) {
    let height = numbers.length;
    if (height == 0) return 0; 
    let width = numbers[0].length; 

    // maximum sum contiguous subrectangle 
    let maxSum = 0;

    // a temporary array of size height created for every fixed 
    // left column and right column
    // temp[i] will represent the sum of elements from left to right
    // (in row i)
    let temp; 
    
    // fix the left column
    for (let left = 0; left < width; ++left) {

        temp = new Array(height).fill(0)

        // fix the right column 
        for (let right = left; right < width; ++right) {

            // find maximum sum contiguous rows for each left,right column pair
            // by "collapsing" the rectangle into a single array and calling kadanes
            for (let i = 0; i < height; ++i) temp[i] += numbers[i][right];
            
            maxSum = Math.max(kadanes(temp), maxSum); 
        }
    }

    return maxSum;
}

module.exports = { largestSumRectangle };