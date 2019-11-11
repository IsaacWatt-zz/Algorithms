/**
 * Longest Common Subsequence Jasmine tests
 */

let LongestCommonSubsequence = require('../../dynamic-programming/longest-common-subsequence');

describe('Basic Tests', function () {
    let longestCommonSubsequence = LongestCommonSubsequence.longestCommonSubsequence;

    it('basic tests', function () {

        // longest common subsequence is 0
        expect( longestCommonSubsequence( "", "" ) ).toEqual( 0 );
        expect( longestCommonSubsequence( "a", "b" ) ).toEqual( 0 );
        expect( longestCommonSubsequence( "", "bfdjfkdsjkaknfjfs" ) ).toEqual( 0 );
        expect( longestCommonSubsequence( "abc", "d" ) ).toEqual( 0 );
        expect( longestCommonSubsequence( "abc", "cba" ) ).toEqual( 1 );

        // longest common subsequence is one
        expect( longestCommonSubsequence( "b", "bfdjfkdsjkaknfjfs" ) ).toEqual( 1 );
        expect( longestCommonSubsequence( "f", "bfdjfkdsjkaknfjfs" ) ).toEqual( 1 );
        expect( longestCommonSubsequence( "zfzzzz", "bfdjfkdsjkaknfjfs" ) ).toEqual( 1 );

        // longer common subsequences
        expect( longestCommonSubsequence( "zfzzzz", "bfdjfkdsjkaknfjfsz" ) ).toEqual( 2 );
        expect( longestCommonSubsequence( "car", "cfjdkjgkakjfjkdjr" ) ).toEqual( 3 );
        expect( longestCommonSubsequence( "hello", "ahefffl" ) ).toEqual( 3 );
        expect( longestCommonSubsequence( "word", "dor" ) ).toEqual( 2 );
        expect( longestCommonSubsequence( "rrr", "rrr" ) ).toEqual( 3 );
        expect( longestCommonSubsequence( "hello", "hello" ) ).toEqual( 5 );

    });
    
});