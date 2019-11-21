/**
 * Binary Heap Jasmine tests
 */

let BinaryHeap = require('../priority-queue/binary-heap');

describe('Basic Tests', function () {

    it('basic min heap', function () {
        let minHeap = new BinaryHeap((item1, item2) => item1 < item2);
        
        minHeap.add(1);
        minHeap.add(2);
        minHeap.add(3);
        minHeap.add(0);

        expect( minHeap.stringify() ).toEqual('0,1,3,2');
        expect( minHeap.peek() ).toEqual(0);
        expect( minHeap.poll() ).toEqual(0);
        expect( minHeap.stringify() ).toEqual('1,2,3');
        
        expect( minHeap.find(1) ).toEqual([0]);
        minHeap.add(0);
        expect( minHeap.stringify() ).toEqual('0,1,3,2');
        minHeap.add(0);
        expect( minHeap.stringify() ).toEqual('0,0,3,2,1');
        expect( minHeap.find(0) ).toEqual([0,1]);


    });

    it('basic max heap', function () {
        let maxHeap = new BinaryHeap((item1, item2) => item1 > item2);
        maxHeap.add(1);
        maxHeap.add(2);
        maxHeap.add(3);
        maxHeap.add(0);

        expect( maxHeap.stringify() ).toEqual('3,1,2,0');

        maxHeap.add(0);
        
        expect( maxHeap.stringify() ).toEqual('3,1,2,0,0');
        expect( maxHeap.find(0) ).toEqual([3,4]);

    });

});