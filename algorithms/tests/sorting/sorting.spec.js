/**
 * Sorting Jasmine tests
 */

let Bubble = require('../../sorting/bubble');
let Insertion = require('../../sorting/insertion');
let Merge = require('../../sorting/merge');
let Quick = require('../../sorting/quick');
let Heap = require('../../sorting/heap');

describe('Basic Tests', function () {

    let sortingAlgorithms = 
    [  
        Bubble.bubbleSort, 
        Insertion.insertionSort, 
        Merge.mergeSort,
        Quick.quickSort,
        Heap.heapSort
    ];

    it('basic tests', function () {
        sortingAlgorithms.forEach( function (sortingAlgorithm) {
            expect( sortingAlgorithm( [] )).toEqual([]);
            expect( sortingAlgorithm( [1] )).toEqual([1]);
            expect( sortingAlgorithm( [1,0] )).toEqual([0,1]);
            expect( sortingAlgorithm( [1,0,2,3,1,7,8] )).toEqual([0,1,1,2,3,7,8]);
        })
    });

    it('automated tests', function () {

        // generates an array (size n) of random elements
        function makeRandomArray(n) {
            return Array.from(
                {length: n},
                () => { 
                    return Number((Math.random() * 50 * (Math.random() > 0.5 ? -1 : 1)).toFixed(5));
                });
        }

        // test 100 randomly generated arrays 
        // compare built in sorting results with results from sortingAlgorithms[i]
        for (let i = 0; i < 50; ++i) {
            let randomArr = makeRandomArray(i);
            let JSSort = [...randomArr]; 
            JSSort.sort((a, b) => a - b);

            sortingAlgorithms.forEach( function (sortingAlgorithm) {
                expect( sortingAlgorithm( randomArr )).toEqual(JSSort);
            })
        }
    });

});