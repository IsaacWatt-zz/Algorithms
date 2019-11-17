/**
 * Stack Jasmine tests
 */

let Stack = require('../list/stack');

describe('Basic Tests', function () {

    it('push, pop, peek, isEmpty, stringify, size', function () {
        let list = new Stack(); 
        
        // emptiness
        expect(list.stringify()).toEqual('');
        expect(list.isEmpty()).toEqual(true);

        // basic functionality
        expect(list.push(1) === undefined);
        expect(list.push(2) === undefined);
        expect(list.push(3) === undefined);
        expect(list.stringify()).toEqual('1 2 3');
        expect(list.size()).toEqual(3);
        expect(list.isEmpty()).toEqual(false);
        expect(list.pop() === 3);
        expect(list.stringify()).toEqual('1 2');
        expect(list.peek()).toEqual(2);
        expect(list.pop()).toEqual(2);
        expect(list.stringify()).toEqual('1');
        expect(list.push(1) === undefined);
        expect(list.stringify()).toEqual('1 1');
        expect(list.peek()).toEqual(1);
        expect(list.stringify()).toEqual('1 1');
        expect(list.pop()).toEqual(1);
        expect(list.pop()).toEqual(1);
        expect(list.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
    });

    it('throws errors', function () {
        let list = new Stack();

        // should throw errors when peeking or popping an empty stack
        expect(function() { list.pop() }).toThrowError;
        expect(function() { list.peek() }).toThrowError;
    });

});