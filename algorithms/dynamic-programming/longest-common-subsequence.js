/**
 * determines the length of the longest common subsequence between two strings
 * a subsequence of a string is defined as a sequence of characters from the string that appear in the 
 * same relative order, however are not necessarily contiguous
 * @param  {String} str1 string of length n
 * @param  {String} str2 string of length m
 * @return {Number} length of longest common subsequence between str1 and str2
 * 
 * @runtime O(nm)
 * @space O(nm)
 * 
*/

let longestCommonSubsequence = function(str1, str2) {
    let n = str1.length; 
    let m = str2.length; 

    // longestSequenceSoFar is our DP array
    // longestSequenceSoFar[i][j] will contain the length of the longest common subsequence 
    // using characters str1[0, ..., i-1] and str2[0, ..., j-1]
    let longestSequenceSoFar = new Array(n+1)
                                .fill(null)
                                .map(() => new Array(m+1));

    // build longestSequenceSoFar in a bottom up fashion
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= m; ++j) {
            
            // we are dealing with an empty str1 or an empty str2 
            // hence the longest common subsequence is "" with length 0
            if (i == 0 || j == 0) longestSequenceSoFar[i][j] = 0;

            else if (str1[i - 1] == str2[j - 1]) 
                longestSequenceSoFar[i][j] = longestSequenceSoFar[i - 1][j - 1] + 1;

            else 
                longestSequenceSoFar[i][j] = Math.max(
                    longestSequenceSoFar[i - 1][j], 
                    longestSequenceSoFar[i][j - 1], 
                );
         }
    }

    return longestSequenceSoFar[n][m]
}

module.exports = { longestCommonSubsequence };