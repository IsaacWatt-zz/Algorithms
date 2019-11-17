/**
 * determines hamming distance between two strings
 * @param  {String} str1 first string to compare for hamming distance
 * @param  {String} str2 second string to compare for hamming distance
 * @return {Number} hamming distance between str1 and str2
 * 
 * hamming distance is defined as the number of positions in which two 
 * strings are different
 * 
 * @runtime O(n)
 * @space O(1)
 * 
*/
let hammingDistance = function(str1, str2) {
    let n = str1.length;
    let m = str2.length;

    if (m != n) throw new Error('Hamming Distance requires both strings are the same length');
    
    let distance = 0;
    for (let i = 0; i < n; ++i) {
        if (str1[i] !== str2[i]) ++distance;
    }
    
    return distance;
}   

module.exports = { hammingDistance };