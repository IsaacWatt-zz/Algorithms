/**
 * Kadanes Algorithm Jasmine tests
 */

let Kadanes = require('../../array/kadanes');

describe('Basic Tests', function () {
    let kadanes = Kadanes.kadanes;

    it('basic tests', function () {
        
        // cases where kadanes chooses a subarray of size zero
        expect(kadanes( [] )).toEqual(0);
        expect(kadanes( [-1] )).toEqual(0);
        expect(kadanes( [-1, -50, -500, -99999] )).toEqual(0);

        // more cases where kadanes returns zero
        expect(kadanes( [0] )).toEqual(0);
        expect(kadanes( [0, -1, 0] )).toEqual(0);
        expect(kadanes( [-1] )).toEqual(0);
        expect(kadanes( [-2, 0, -5, 0, 0] )).toEqual(0);
        expect(kadanes( [-5, 0, -3] )).toEqual(0);

        // cases where kadanes chooses a subarray of size 1
        expect(kadanes( [-5, 0, -3, 1] )).toEqual(1);
        expect(kadanes( [-5, 5, -3, 3] )).toEqual(5);
        expect(kadanes( [-5, 5, -5, 3] )).toEqual(5);
        expect(kadanes( [0, 0, 0, 1, 0, 0, 0] )).toEqual(1);
        expect(kadanes( [-1, -1, 1, -1, -1] )).toEqual(1);

        // cases where kadanes chooses subarray containing 
        // positive and negative values
        expect(kadanes( [-1, -2, 5, -1, 5] )).toEqual(9);
        expect(kadanes( [-1, -2, 5, -1, 5, -1, -2, 10, 0] )).toEqual(16);
        expect(kadanes( [10, 9, -9, 10, 7, -5000] )).toEqual(27);

        // cases where maximum size subarray is not unique
        expect(kadanes( [10, 9, -99999, 10, 9] )).toEqual(19);
        expect(kadanes( [1, -1, 1] )).toEqual(1);
        expect(kadanes( [1, 0, 0, 0, -1, 0, 0, 0, 1] )).toEqual(1);
        
        // generates an array (size n) of random elements
        function makeRandomArray(n) {
            return Array.from(
                {length: n}, 
                () => { 
                    return Math.random() * 50 * (Math.random() > 0.5 ? -1 : 1);
                });
        }
        
        // computes maximum subarray sum using brute force
        // algorithm in O(n^2) time
        function bruteForceMaxSubarray(numbers) {
            let n = numbers.length; 
            let res = 0; 

            for (let i = 0; i < n; ++i) {
                let sum = 0; 
                for (let j = i; j < n; ++j) {
                    // for every subarray [i ... j]
                    sum += numbers[j]; 
                    res = Math.max(res, sum);
                }
            }
            return res; 
        }

        // test 100 randomly generated arrays 
        // compare brute force results with results from kadanes
        for (let i = 0; i < 100; ++i) {
            let randomArr = makeRandomArray(i);
            let res = bruteForceMaxSubarray(randomArr); 
            expect(kadanes( randomArr )).toEqual(res);
        }

    });

    it('automated tests', function () {

        // generates an array (size n) of random elements
        function makeRandomArray(n) {
            return Array.from(
                {length: n}, 
                () => { 
                    return Number((Math.random() * 50 * (Math.random() > 0.5 ? -1 : 1)).toFixed(4));
                });
        }
        
        // computes maximum subarray sum using brute force
        // algorithm in O(n^2) time
        function bruteForceMaxSubarray(numbers) {
            let n = numbers.length; 
            let res = 0; 

            for (let i = 0; i < n; ++i) {
                let sum = 0; 
                for (let j = i; j < n; ++j) {
                    // for every subarray [i ... j]
                    sum += numbers[j]; 
                    res = Math.max(res, sum);
                }
            }
            return res; 
        }

        // test 100 randomly generated arrays 
        // compare brute force results with results from kadanes
        for (let i = 0; i < 100; ++i) {
            let randomArr = makeRandomArray(i);
            let res = bruteForceMaxSubarray(randomArr); 
            expect(kadanes( randomArr )).toEqual(res);
        }

    });

});