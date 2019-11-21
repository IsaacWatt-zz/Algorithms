/**
 * Binary Heap implementation with basic data structure operations
 */

"use strict";

class BinaryHeap {
    /**
     * Construct an empty BinaryHeap
     * @param {Function} orderingCallback callback that takes in two Heap Items as parameters
     *                   and determines which one should be given priority
     * @param {Array} items an initial array of items
     * @return {BinaryHeap} returns a reference to the created BinaryHeap
     */
    constructor(orderingCallback, items = []){
        this.items = items;
        this.size = this.items.length;
        this.orderingCallback = orderingCallback ? orderingCallback : (item1, item2) => item1 < item2;
    }
}

/**
 * determines the index of the left child of an item in the binary heap
 * @param {Number} parentIndex index of an item in the binary heap
 * @return {Number} index of the left child of parentIndex or -1 if parentIndex has no children
 * 
 */ 
BinaryHeap.prototype.getIndexOfLeftChild = function(parentIndex) {
    let position = (2 * parentIndex) + 1;
    return position >= this.size ? -1 : position;
}

/**
 * gets the left child of an item in the binary heap
 * @param {Number} parentIndex index of an item in the binary heap
 * @return {Any|Null} the left child of parentIndex or null if parentIndex has no children
 * 
 */ 
BinaryHeap.prototype.getLeftChild = function(parentIndex) {
    let position = this.getIndexOfLeftChild(parentIndex);
    return position >= 0 ? this.items[position] : null;
}

/**
 * determines the index of the right child of an item in the binary heap
 * @param {Number} parentIndex index of an item in the binary heap
 * @return {Number} index of the right child if parentIndex or -1 if parentIndex has no children
 * 
 */ 
BinaryHeap.prototype.getIndexOfRightChild = function(parentIndex) {
    let position = (2 * parentIndex) + 2;
    return position < this.size ? position : -1;
}

/**
 * gets the right child of an item in the binary heap
 * @param {Number} parentIndex index of an item in the binary heap
 * @return {Any|Null} the right child of parentIndex or null if parentIndex has no children
 * 
 */ 
BinaryHeap.prototype.getRightChild = function(parentIndex) {
    let position = this.getIndexOfRightChild(parentIndex);
    return position >= 0 ? this.items[position] : null;
}

/**
 * determines the index of the parent of an item in the binary heap
 * @param {Number} childIndex index of an item in the binary heap
 * @return {Number} index of the parent of childIndex or -1 if parentIndex has no children
 * 
 */ 
BinaryHeap.prototype.getIndexOfParent = function(childIndex) {
    let position = (childIndex - 1) / 2;
    return position < 0 ? -1 : Math.floor(position);
}

/**
 * determines if an item in the BinaryHeap has a parent
 * @param {Number} childIndex index of item in the binary heap
 * @return {Boolean} true if childIndex has a parent, false otherwise (ie if it is the root)
 * 
 */ 
BinaryHeap.prototype.hasParent = function(childIndex) {
    return this.getIndexOfParent(childIndex) >= 0;
}

/**
 * gets the parent of an item in the binary heap
 * @param {Number} childIndex index of item in the binary heap
 * @return {Any|Null} the parent of childIndex or null if childIndex has no parent (ie is the root)
 * 
 */ 
BinaryHeap.prototype.getParent = function(childIndex) {
    let position = this.getIndexOfParent(childIndex);
    return position >= 0 ? this.items[position] : null;
}

/**
 * gets the item at the root of the Binary Heap
 * @return {Any|Null} the item at the root of the heap or null if the Binary Heap is empty
 * 
 */ 
BinaryHeap.prototype.peek = function() {
    if (this.size == 0) return null;
    return this.items[0];
}

/**
 * adds an item to the Binary Heap
 * @param {Any} item is the item to be added to the Binary Heap
 * @return {Undefined} 
 * 
 * @runtime O(logn)
 * 
 */ 
BinaryHeap.prototype.add = function(item) {
    
    // put the item at the end of the Heap
    // and heapifyUp in order to ensure it is in 
    // the correct position
    this.items.push(item);
    ++this.size;
    this.heapifyUp(this.size - 1);
}

/**
 * Removes the item at the root of the Binary Heap
 * @return {Any|Null} the item at the root of the Binary Heap or Null if the Binary Heap is empty
 * 
 * @runtime O(logn)
 * 
 */ 
BinaryHeap.prototype.poll = function() {
    if (this.size == 0) return null;
    if (this.size == 1) return this.items.pop();

    const prevRoot = this.items[0];

    // move last item to the root and
    // bubble it down to its proper position
    this.items[0] = this.items.pop();
    --this.size;
    this.heapifyDown(0);

    return prevRoot;
}

/**
 * swaps the positions of two elements in the Binary Heap
 * Note: this does not Heapify Up/Down and thus should be used cautiously
 * @param {Number} index1 position of an item in Binary Heap
 * @param {Number} index2 position of an item in Binary Heap
 * @return {Undefined}
 * 
 */ 
BinaryHeap.prototype.swap = function(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
}

/**
 * finds all occurence indices of an item in the Binary Heap
 * @param {Any} item an item that (may) be in the Binary Heap
 * @param {Function|Undefined} equalityCallback a callback specifying when two items in a Binary Heap are equal
 * @return {Array} indices of where item exists in the Binary Heap 
 *                 ( [] if item not in Binary Heap)
 * 
 * @runtime O(n)
 * @space O(n)
 * 
 */ 
BinaryHeap.prototype.find = function(item, equalityCallback = undefined) {
    let compare = equalityCallback ? equalityCallback :
        (item1, item2) => !this.orderingCallback(item1, item2) && 
                          !this.orderingCallback(item2, item1);
    let n = this.size; 
    
    let found = [];
    for (let i = 0; i < n; ++i) {
        let currItem = this.items[i];
        if (compare(currItem, item)) found.push(i);
    }

    return found;
}

/**
 * Moves item located at currIndex up the Binary Heap until it satisfies the 
 * orderingCallback property in its new position
 * @param {Number} currIndex index of item to be swapped into its correct position
 * @return {Undefined} 
 * 
 * @runtime O(logn)
 * @space O(1)
 * 
 */ 
BinaryHeap.prototype.heapifyUp = function(currIndex) {

    let parentIndex = this.getIndexOfParent(currIndex); 
    while (this.hasParent(currIndex) && this.orderingCallback(this.items[currIndex], this.items[parentIndex])) {
        this.swap(parentIndex, currIndex);
        currIndex = parentIndex;
        parentIndex = this.getIndexOfParent(currIndex); 
    }

}

/**
 * Moves item located at currIndex down the Binary Heap until it satisfies the 
 * orderingCallback property in its new position
 * @param {Number} currIndex index of item to be swapped into its correct position
 * @return {Undefined} 
 * 
 * @runtime O(logn)
 * @space O(1)
 * 
 */ 
BinaryHeap.prototype.heapifyDown = function(currIndex) {

    while (true) {
        let leftIndex = this.getIndexOfLeftChild(currIndex);
        let rightIndex = this.getIndexOfRightChild(currIndex);

        // determine which child has a higher priority
        let nextIndex = leftIndex;
        if (rightIndex > 0 && this.orderingCallback(this.items[rightIndex], this.items[leftIndex])) 
            nextIndex = rightIndex;

        // if we are outside bounds of the Binary Heap or items at currIndex and nextIndex 
        // satisfy orderingCallback then item at currIndex is in its rightful spot
        if (leftIndex < 0 || this.orderingCallback(this.items[currIndex], this.items[nextIndex])) 
            break;

        // currIndex has lower priority than nextIndex, thus swap the two and proceed
        this.swap(currIndex, nextIndex);
        currIndex = nextIndex;
    }
}

/**
 * Stringifies a Binary Heap
 * @return {String} a string interpretation of the Binary Heap
 * 
 */ 
BinaryHeap.prototype.stringify = function() {
    return this.items.toString();
}

/**
 * Empties the BinaryHeap
 * @return {Undefined}
 * 
 */ 
BinaryHeap.prototype.clear = function() {
    this.items = [];
}

module.exports = BinaryHeap;