let Heap = require('../../data-structures/priority-queue/binary-heap');

/**
 * sorts an array of numbers (stable)
 * @param  {Array} A is an array of numbers
 * @return {Array} array A, sorted
 * 
 * @runtime O(nlogn)
 * @space O(1)
 * 
*/
let heapSort = function(A) {
    let n = A.length;

    // wrap A in a heap and operate on the heap wrapper
    let heapA = new Heap((item1, item2) => item1 > item2, A);
    
    // heapify down from the bottom to top in
    // postcondition: A satisfies max Heap property
    // (orderingCallback describes a max heap)
    for (let i = heapA.getIndexOfParent(heapA.size-1); i >= 0; --i) {
        heapA.heapifyDown(i);
    }

    // at iteration j of the following loop we are working with
    // heapA[0 ... n - j] satisfies max Heap property
    // heapA[n - j + 1 ... n - 1] satisfies a sorted array
    for (let i = n - 1; i >= 0; --i) { 
        // swap max item with last item in the array
        heapA.swap(0, i);

        // remove item we just swapped from the Max Heap
        // as it is now part of the sorted portion
        --heapA.size;

        // heapifyDown from root since we just
        // swapped the max item with the smallest item
        heapA.heapifyDown(0);
    }

    return A;
}

module.exports = { heapSort };