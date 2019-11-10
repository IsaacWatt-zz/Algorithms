/**
 * Double Ended Queue implementation with basic data structure operations
 */

"use strict";

class DoubleEndedQueue {
    /**
     * Construct an empty Double Ended Queue
     * @return {Queue} returns a reference to the created Double Ended Queue
     */
    constructor(){
        this.items = [];
    }
}

/**
 * adds an item to the front of the Queue
 * @param {Any} item to be added
 * @return {Undefined}
 * 
 */
DoubleEndedQueue.prototype.enqueueBack = function(item) {
    this.items.push(item); 
}

/**
 * adds an item to the back of the Queue
 * @param {Any} item to be added
 * @return {Undefined}
 * 
 */
DoubleEndedQueue.prototype.enqueueFront = function(item) {
    this.items.unshift(item); 
    return this;
}

/**
 * removes an element from the front Queue
 * @return {Any} returns the element which was removed
 */
DoubleEndedQueue.prototype.dequeueFront = function() {
    if (this.items.length == 0) throw new Error('Queue is empty');
    return this.items.shift(); 
}

/**
 * removes an element from the back of the Queue
 * @return {Any} returns the element which was removed
 */
DoubleEndedQueue.prototype.dequeueBack = function() {
    if (this.items.length == 0) throw new Error('Queue is empty');
    return this.items.pop(); 
}

/**
 * gets the element at the front of the Queue 
 * @return {Any} returns the element at the front of the Queue
 */
DoubleEndedQueue.prototype.front = function() {
    if (this.items.length == 0) throw new Error('Queue is empty');
    return this.items[0]; 
}

/**
 * gets the element at the back of the Queue 
 * @return {Any} returns the element at the front of the Queue
 */
DoubleEndedQueue.prototype.back = function() {
    let n = this.items.length; 
    if (n == 0) throw new Error('Queue is empty');
    return this.items[n - 1]; 
}

/**
 * determines if the Queue is empty
 * @return {Boolean} returns true if the Queue is empty, else false
 */
DoubleEndedQueue.prototype.isEmpty = function() {
    return this.size() === 0;
}

/**
 * determines the size of the Queue
 * @return {Number} returns the number of elements in the Queue
 */
DoubleEndedQueue.prototype.size = function() {
    return this.items.length;
}


/**
 * Creates a String interpretation of the Queue
 * (first in Queue to last) 
 * @return {String} a string interpretation of the Queue 
 */
DoubleEndedQueue.prototype.stringify = function() {
    let str = "";
    this.items.forEach((el, index) => {
        str += el;
        if (index != this.items.length - 1) str += " ";
    });
    return str;
}

module.exports = DoubleEndedQueue;