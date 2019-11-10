/**
 * Count Inversions Jasmine tests
 */

let CountInversions = require('../../divide-and-conquer/count-inversions.js');

describe('Basic Tests', function () {
    let countInversions = CountInversions.countInversions;

    it('basic tests', function () {

        // zero inversions
        expect( countInversions( [] ) ).toEqual( 0 );
        expect( countInversions( [0] ) ).toEqual( 0 );
        expect( countInversions( [1, 2, 3, 4, 5] ) ).toEqual( 0 );

        // one inversion
        expect( countInversions( [10, 2] ) ).toEqual( 1 );
        expect( countInversions( [1, 2, 3, 6, 5] ) ).toEqual( 1 );

        // more inversions
        expect( countInversions( [1, 2, 10, 6, 5] ) ).toEqual( 3 );
        expect( countInversions( [3, 8, 1, 3, 9, 10, 11, 12, 10, 2, 0] ) ).toEqual( 23 );
        expect( countInversions( [1, 1.0001, 0, 0.0001, 0.01, 0.00000001] ) ).toEqual( 10 );
        expect( countInversions( [10, 9, 8, 7] ) ).toEqual( 6 );

    });
    
});