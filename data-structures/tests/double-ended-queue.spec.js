/**
 * Queue Jasmine tests
 */

let DoubleEndedQueue = require('../double-ended-queue');

describe('Basic Tests', function () {

    it('enqueueBack and dequeueBack', function () {
        let q = new DoubleEndedQueue(); 
        
        // emptiness
        expect(q.stringify()).toEqual('');
        expect(q.isEmpty()).toEqual(true);

        // basic functionality
        expect(q.enqueueBack(1) === undefined);
        expect(q.enqueueBack(2) === undefined);
        expect(q.enqueueBack(3) === undefined);
        expect(q.stringify()).toEqual('1 2 3');
        expect(q.size()).toEqual(3);
        expect(q.isEmpty()).toEqual(false);
        expect(q.dequeueFront() === 1);
        expect(q.stringify()).toEqual('2 3');
        expect(q.front()).toEqual(2);
        expect(q.dequeueFront()).toEqual(2);
        expect(q.stringify()).toEqual('3');
        expect(q.enqueueBack(1) === undefined);
        expect(q.stringify()).toEqual('3 1');
        expect(q.front()).toEqual(3);
        expect(q.stringify()).toEqual('3 1');
        expect(q.dequeueFront()).toEqual(3);
        expect(q.dequeueFront()).toEqual(1);
        expect(q.size()).toEqual(0);
        expect(q.isEmpty()).toEqual(true);
    });

    it('enqueueFront and dequeueFront', function () {
        let q = new DoubleEndedQueue(); 
          
        // emptiness
        expect(q.stringify()).toEqual('');
        expect(q.isEmpty()).toEqual(true);

        // basic functionality
        expect(q.enqueueFront(1) === undefined);
        expect(q.enqueueFront(2) === undefined);
        expect(q.enqueueFront(3) === undefined);
        expect(q.stringify()).toEqual('3 2 1');
        expect(q.size()).toEqual(3);
        expect(q.isEmpty()).toEqual(false);
        expect(q.dequeueFront() === 3);
        expect(q.stringify()).toEqual('2 1');
        expect(q.front()).toEqual(2);
        expect(q.dequeueFront()).toEqual(2);
        expect(q.stringify()).toEqual('1');
        expect(q.enqueueFront(1) === undefined);
        expect(q.stringify()).toEqual('1 1');
        expect(q.front()).toEqual(1);
        expect(q.stringify()).toEqual('1 1');
        expect(q.dequeueFront()).toEqual(1);
        expect(q.dequeueFront()).toEqual(1);
        expect(q.size()).toEqual(0);
        expect(q.isEmpty()).toEqual(true);
    });

    it('enqueue, dequeue front and back', function () {
        let q = new DoubleEndedQueue(); 
          
        // emptiness
        expect(q.stringify()).toEqual('');
        expect(q.isEmpty()).toEqual(true);

        // basic functionality
        expect(q.enqueueFront(1) === undefined);
        expect(q.enqueueFront(2) === undefined);
        expect(q.enqueueFront(3) === undefined);
        expect(q.enqueueBack(4) === undefined);
        expect(q.stringify()).toEqual('3 2 1 4');
        expect(q.size()).toEqual(4);
        expect(q.isEmpty()).toEqual(false);
        expect(q.dequeueFront() === 3);
        expect(q.stringify()).toEqual('2 1 4');
        expect(q.front()).toEqual(2);
        expect(q.back()).toEqual(4);
        expect(q.dequeueFront()).toEqual(2);
        expect(q.stringify()).toEqual('1 4');
        expect(q.enqueueFront(1) === undefined);
        expect(q.stringify()).toEqual('1 1 4');
        expect(q.front()).toEqual(1);
        expect(q.back()).toEqual(4);
        expect(q.stringify()).toEqual('1 1 4');
        expect(q.dequeueFront()).toEqual(1);
        expect(q.dequeueFront()).toEqual(1);
        expect(q.size()).toEqual(1);
        expect(q.isEmpty()).toEqual(false);
        expect(q.stringify()).toEqual('4');
        expect(q.front()).toEqual(4);
        expect(q.back()).toEqual(4);
        expect(q.dequeueBack()).toEqual(4);
    });

    it('throws errors', function () {
      let q = new DoubleEndedQueue();

      // should throw errors when peeking or popping an empty queue
      expect(function() { q.dequeueFront() }).toThrowError;
      expect(function() { q.front() }).toThrowError;
      expect(function() { q.back() }).toThrowError;
      expect(function() { q.dequeueBack() }).toThrowError;
  });

});