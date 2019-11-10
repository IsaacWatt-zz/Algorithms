/**
 * Largest Sum Rectangle Jasmine tests
 */

let LargestSumRectangle = require('../../array/maximum-sum-rectangle');

describe('Basic Tests', function () {
    let largestSumRectangle = LargestSumRectangle.largestSumRectangle;

    it('basic tests', function () {

        // all entries in the matrix are >= 0
        expect(largestSumRectangle( [[]] )).toEqual(0);
        expect(largestSumRectangle( [[0]] )).toEqual(0);
        expect(largestSumRectangle( [[0,1,2,3]] )).toEqual(6);
        expect(largestSumRectangle( [[0,1,2,3], [0,1,2,3]] )).toEqual(12);
        expect(largestSumRectangle( [[0,1], [0,1], [0,1]] )).toEqual(3);
        expect(largestSumRectangle( [[0,0], [0,0], [0,0]] )).toEqual(0);
        expect(largestSumRectangle( [[2,3], [0,0], [1,0]] )).toEqual(6);

        // negative values
        expect(largestSumRectangle( 
            [
                [2,3], 
                [-100,-100], 
                [1,0]
            ] 
            )).toEqual(5);
        expect(largestSumRectangle( 
            [
                [1,1], 
                [-1,-1], 
                [1,1]
            ] 
            )).toEqual(2);
        expect(largestSumRectangle( 
            [
                [1,1,1,1,1,1], 
                [-1,-1,1,1,1,1], 
                [1,1,1,1,1,1]
            ] 
            )).toEqual(14);   
        expect(largestSumRectangle( 
            [
                [12,4,1,325,33,1], 
                [-1,-4,1,1,32,1], 
                [111111,323232,32,33,1,1]
            ] 
            )).toEqual(434816);          
    });

});