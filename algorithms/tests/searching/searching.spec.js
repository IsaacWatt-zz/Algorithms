/**
 * Searching Jasmine tests
 */

let Binary = require('../../searching/binary-search');
let Jump = require('../../searching/jump-search');

describe('Basic Tests', function () {

    let searchingAlgorithms = 
    [  
        Binary.binarySearch, 
        Jump.jumpSearch
    ];

    it('basic tests', function () {
        searchingAlgorithms.forEach( function (searchingAlgorithm) {
            // basis tests where each element in the array is distinct and thus 
            // searching returns a unique index
            expect( searchingAlgorithm( [], 0 )).toEqual(-1);
            expect( searchingAlgorithm( [1], 1 )).toEqual(0);
            expect( searchingAlgorithm( [0, 1], 0 )).toEqual(0);

            expect( searchingAlgorithm( [1,2,3,4,5,6], 4 )).toEqual(3);
            expect( searchingAlgorithm( [0], 0 )).toEqual(0);

            expect( searchingAlgorithm( [50,51,51.1], 51 )).toEqual(1);
            expect( searchingAlgorithm( [1,2,3,4,5,6,67,99], 99.1 )).toEqual(-1);
            expect( searchingAlgorithm( [1], 1 )).toEqual(0);
        })
    });

});