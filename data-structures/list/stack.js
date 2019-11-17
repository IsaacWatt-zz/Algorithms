/**
 * Stack implementation with basic data structure operations
 */

"use strict";

class Stack {
    /**
     * Construct an empty Stack
     * @return {Stack} returns a reference to the created Stack
     */
    constructor(){
        this.items = [];
    }
}

/**
 * Push an item into the stack
 * @param {Any} item to be pushed onto the Stack
 * @return {Undefined}
 * 
 * 
 */
Stack.prototype.push = function(item) {
    this.items.push(item); 
}

/**
 * Pop an item from the stack
 * @return {Any} returns item popped from stack
 */
Stack.prototype.pop = function() {
    if (this.items.length == 0) throw new Error('Nothing to pop');
    return this.items.pop(); 
}

/**
 * Looks at the topmost item of the stack
 * @return {Any} returns the item at the top of the stack
 */
Stack.prototype.peek = function() {
    if (this.items.length == 0) throw new Error('Nothing in the Stack');
    return this.items[this.items.length - 1];
}

/**
 * checks if a Stack is empty
 * @return {Bool} returns true if the Stack is empty, else false 
 */
Stack.prototype.isEmpty = function() {
    return this.size() === 0;
}

/**
 * checks the number of elements in a stack
 * @return {Number} returns the number of elements in the stack
 */
Stack.prototype.size = function() {
    return this.items.length;
}

/**
 * Creates a String interpretation of the Stack
 * @return {String} a string interpretation of the Stack 
 */
Stack.prototype.stringify = function() {
    let str = "";
    this.items.forEach((el, index) => {
        str += el;
        if (index != this.items.length - 1) str += " ";
    });
    return str;
}

module.exports = Stack;