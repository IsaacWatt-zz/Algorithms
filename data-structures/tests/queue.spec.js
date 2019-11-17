/**
 * Queue Jasmine tests
 */

let Queue = require('../list/queue');

describe('Basic Tests', function () {

    it('enqueue, dequeue, front, size, isEmpty, stringify', function () {
        let q = new Queue(); 
        
        // emptiness
        expect(q.stringify()).toEqual('');
        expect(q.isEmpty()).toEqual(true);

        // basic functionality
        expect(q.enqueue(1) === undefined);
        expect(q.enqueue(2) === undefined);
        expect(q.enqueue(3) === undefined);
        expect(q.stringify()).toEqual('1 2 3');
        expect(q.size()).toEqual(3);
        expect(q.isEmpty()).toEqual(false);
        expect(q.dequeue() === 1);
        expect(q.stringify()).toEqual('2 3');
        expect(q.front()).toEqual(2);
        expect(q.dequeue()).toEqual(2);
        expect(q.stringify()).toEqual('3');
        expect(q.enqueue(1) === undefined);
        expect(q.stringify()).toEqual('3 1');
        expect(q.front()).toEqual(3);
        expect(q.stringify()).toEqual('3 1');
        expect(q.dequeue()).toEqual(3);
        expect(q.dequeue()).toEqual(1);
        expect(q.size()).toEqual(0);
        expect(q.isEmpty()).toEqual(true);
    });

    it('throws errors', function () {
        let q = new Queue();

        // should throw errors when peeking or popping an empty queue
        expect(function() { q.dequeue() }).toThrowError;
        expect(function() { q.front() }).toThrowError;
    });

});