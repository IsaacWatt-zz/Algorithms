/**
 * returns the maximum profit that can possibly be obtained by cutting a length n 
 * rod into one or more pieces, and selling each piece individually
 * @param  {Array} prices an array of prices to corresponding rod lengths, prices[i] is price of rod length i+1
 * @param  {Array} n length of the rod we want to sell for maximum profit
 * @return {Number} maximum selling price of the rod by dividing it into maximally priced subpieces
 * 
 * @runtime O(n^2)
 * @space O(n)
 * 
*/

let rodCut = function(prices, n) {
    let m = prices.length; 
    if (n != m) throw new Error("prices[i] must be defined for all i <= n");

    // maximumProfit[i] is the maximum profit which can be made from 
    // a rod of length i
    // we proceed by filling in maximumProfit using bottom-up dynamic programming 
    let maximumProfit = new Array(n+1).fill(0);

    for (let length = 1; length <= n; ++length) {
        let currLengthMax = prices[length-1]; 

        for (let i = 1; i < length; ++i) {
            // for each possible partition of the rod, check if 
            // partitioning results in a larger currLengthMax
            currLengthMax = Math.max(currLengthMax, prices[i - 1] + maximumProfit[length - i] );
        }

        maximumProfit[length] = currLengthMax;
    }

    return maximumProfit[n];
}

module.exports = { rodCut };