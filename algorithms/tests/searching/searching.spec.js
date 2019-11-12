/**
 * Searching Jasmine tests
 */

let Binary = require('../../searching/binary-search');

describe('Basic Tests', function () {

    let searchingAlgorithms = 
    [  
        Binary.binarySearch, 
    ];

    it('basic tests', function () {
        searchingAlgorithms.forEach( function (searchingAlgorithm) {
            expect( searchingAlgorithm( [], 0 )).toEqual(-1);
            expect( searchingAlgorithm( [1], 1 )).toEqual(0);
            expect( searchingAlgorithm( [0, 1], 0 )).toEqual(0);

            expect( searchingAlgorithm( [1,2,3,4,5,6], 4 )).toEqual(3);
            expect( searchingAlgorithm( [1,1,1,1,1,1,1,1], 1 )).toEqual(3);
            expect( searchingAlgorithm( [0,0], 0 )).toEqual(0);

            expect( searchingAlgorithm( [50,51,51], 51 )).toEqual(1);
            expect( searchingAlgorithm( [1,2,3,4,5,6,67,99], 99.1 )).toEqual(-1);
            expect( searchingAlgorithm( [1], 1 )).toEqual(0);
        })
    });

});