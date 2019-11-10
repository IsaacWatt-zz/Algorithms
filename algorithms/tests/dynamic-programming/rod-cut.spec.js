/**
 * Rod Cut Jasmine tests
 */

let RodCut = require('../../dynamic-programming/rod-cut');

describe('Basic Tests', function () {
    let rodCut = RodCut.rodCut;

    it('basic tests', function () {

        // cases where profit is zero
        expect( rodCut( [0], 1 ) ).toEqual( 0 );
        expect( rodCut( [0, 0, 0], 3 ) ).toEqual( 0 );
        expect( rodCut( [-1, -1, 0], 3 ) ).toEqual( 0 );

        // cases where best option is to sell rod how it is
        expect( rodCut( [0, 0, 3], 3 ) ).toEqual( 3 );
        expect( rodCut( [50], 1 ) ).toEqual( 50 );
        expect( rodCut( [1, 2, 3, 4, 5], 5 ) ).toEqual( 5 );

        // best option is to split rod
        expect( rodCut( [1, 1, 5, 1, 1], 5 ) ).toEqual( 7 );
        expect( rodCut( [1, 1, 0, 1, 1], 5 ) ).toEqual( 5 );
        expect( rodCut( [3, 2, 0, 9, 1], 5 ) ).toEqual( 15 );
        expect( rodCut( [3, 2, 0, 20, 1], 5 ) ).toEqual( 23 );
        expect( rodCut( [0, 2, 0, 0, 0], 5 ) ).toEqual( 4 );
    });
    
});