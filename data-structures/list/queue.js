/**
 * Queue implementation with basic data structure operations
 */

"use strict";

class Queue {
    /**
     * Construct an empty Queue
     * @param {Function} compareCallback a callback specifying how to compare items in the queue
     * @return {Queue} returns a reference to the created Queue
     */
    constructor(compareCallback = undefined){
        this.items = [];
        this.compareCallback = compareCallback ? compareCallback : (item1, item2) => item1 === item2;
    }
}

/**
 * adds an item into the Queue
 * @param {Any} item to be added
 * @return {Undefined}
 * 
 */
Queue.prototype.enqueue = function(item) {
    this.items.push(item); 
}

/**
 * removes an element from the Queue
 * @return {Any} returns the element which was removed
 */
Queue.prototype.dequeue = function() {
    if (this.items.length == 0) throw new Error('Queue is empty');
    return this.items.shift(); 
}

/**
 * gets the element at the front of the Queue 
 * @return {Any} returns the element at the front of the Queue
 */
Queue.prototype.front = function() {
    if (this.items.length == 0) throw new Error('Queue is empty');
    return this.items[0]; 
}

/**
 * determines the number of elements in the Queue
 * @return {Number} number of elements in the queue
 */
Queue.prototype.size = function() {
    return this.items.length;
}

/**
 * determines if the Queue is empty
 * @return {Boolean} returns true if the Queue is empty, else false
 */
Queue.prototype.isEmpty = function() {
    return this.size() === 0;
}

/**
 * Creates a String interpretation of the Queue
 * (first in Queue to last) 
 * @return {String} a string interpretation of the Queue 
 */
Queue.prototype.stringify = function() {
    let str = "";
    this.items.forEach((el, index) => {
        str += el;
        if (index != this.items.length - 1) str += " ";
    });
    return str;
}

module.exports = Queue;