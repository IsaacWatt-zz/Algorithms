/**
 * Hamming Distance Jasmine tests
 */
let HammingDistance = require('../../string/hamming-distance');

describe('Basic Tests', function () {
    let hammingDistance = HammingDistance.hammingDistance;


    it('basic tests', function () {
        expect( hammingDistance( "", "" )).toEqual(0);
        expect( hammingDistance( "abc", "def" )).toEqual(3);
        expect( hammingDistance( "abc", "zab" )).toEqual(3);
        expect( hammingDistance( "abcdef", "zabcde" )).toEqual(6);

        expect( hammingDistance( "abc", "abc" )).toEqual(0);
        expect( hammingDistance( "aaa", "aaa" )).toEqual(0);
        expect( hammingDistance( "aba", "aaa" )).toEqual(1);
        expect( hammingDistance( "0101010101", "1010101010" )).toEqual(10);
        expect( hammingDistance( "0101010101", "0101010101" )).toEqual(0);


        expect(function() { let a = hammingDistance("a", "bc") }).toThrowError;
        expect(function() { let a = hammingDistance("a", "") }).toThrowError;
        expect(function() { let a = hammingDistance("bc", "def") }).toThrowError;

    });

});