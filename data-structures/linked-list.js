/**
 * Linked List implementation with basic data structure operations
 */

"use strict";
let Node = require('./node');

class LinkedList {
    /**
     * Construct an empty Linked List
     * @return {LinkedList} returns a reference to the created LinkedList
     */
    constructor(){
        this.head = null;
    }
}

/**
 * Stringify the LinkedList
 * @return {String} a String interpretation of the LinkedList
 * 
 */
LinkedList.prototype.stringify = function() {

    let currNode = this.head; 
    let stringList = "";

    while (currNode) {
        stringList += currNode.data + (currNode.next ? "->" : "");
        currNode = currNode.next; 
    }
    
    return stringList;
}

/**
 * Append to the beginning of the LinkedList
 * @param  {Any} data The data inside the node to be inserted
 * @return {Undefined}
 */ 
LinkedList.prototype.insertAtHead = function(data) {
    // create new Node containing data which points to the current head
    let newNode = new Node(data);
    newNode.next = this.head;     
    
    // the current head now points to the new node
    this.head = newNode;
}

/**
 * Append to the end of the LinkedList
 * @param  {Any} data The data inside the node to be inserted
 * @return {Undefined}
 */
LinkedList.prototype.insertAtTail = function(data) {
    // create new Node containing data which points to the current head
    let newNode = new Node(data);

    // if there is no node 
    if (!this.head) {
        this.head = newNode;
        return;
    }

    // traverse the linkedlist
    let curr = this.head; 
    while(curr.next) curr = curr.next;
         
    curr.next = newNode; 
}

/**
 * retrieve Node at an index of the LinkedList
 * @param  {Number} index The index of the element you wish to retrieve
 * @return {(Node|Error)} The Node at the given index
 */
LinkedList.prototype.getIndex = function(index) {
    if (!Number.isInteger(index)) throw new Error('Index must be integer value');

    // traverse the LinkedList index times
    let curr = this.head; 
    
    // find node at the given index
    while(curr && index > 0) {
        --index; 
        curr = curr.next; 
    }
    
    // we must have decremented all the way down to index = 0; otherwise 
    // index was out of range 
    if (curr && index == 0) {
        return curr;
    } else {
       throw new Error('Out of bounds');
    } 
}

/**
 * insert item at an index of the LinkedList
 * @param  {Number} index The index of the element you wish to retrieve
 * @return {(Undefined|Error)}
 */
LinkedList.prototype.insertIndex = function(data, index) {
    if (!Number.isInteger(index)) throw new Error('Index must be integer value');

    let newNode = new Node(data);

    // if the item needs to be inserted before the head
    if (index == 0) {
        this.head = this.head ? new Node(data, this.head) : newNode;
        return;
    }

    let previous;
    try {
        previous = this.getIndex(index - 1); 
    } catch (err) {
        throw new Error(err);
    }
    
    newNode.next = previous.next; 
    previous.next = newNode; 
}

/**
 * delete first Node in Linked List
 * @return {(Undefined|Error)}
 */
LinkedList.prototype.removeFirst = function() {

    if(!this.head){
        throw new Error('Linked List is already empty!');
    }

    this.head = this.head.next;
}

/**
 * delete last Node in Linked List
 * @return {(Node|Error)} returns a reference to the deleted Node
 */
LinkedList.prototype.removeLast = function() {
    
    // no Node to delete
    if(!this.head){
        throw new Error('Linked List is already empty!');
    }
    
    let deleteNode;
    // only one Node 
    if(!this.head.next) {
        deleteNode = this.head; 
        this.head = null;
        return deleteNode;
    }

    let curr = this.head; 

    while(curr && curr.next &&curr.next.next) curr = curr.next;
    deleteNode = curr.next;
    curr.next = null;
    return deleteNode;
}

/**
 * remove item at index from LinkedList
 * @param  {Number} index The index of the element you wish to remove
 * @return {(Node|Error)} The Node at the index
 */
LinkedList.prototype.removeIndex = function(index) {
    if (!Number.isInteger(index)) throw new Error('Index must be integer value');

    // cannot delete an item in an empty Linked List
    if (!this.head) {
        return new Error('Linked List is already empty');
    }

    let deleteNode;
    // if the item needs to be inserted before the head
    if (index == 0) {
        deleteNode = this.head; 
        this.head = this.head.next;
        return deleteNode;
     }

    let previous = this.getIndex(index - 1);
    if (!previous || !previous.next) {
        throw new Error('Out of bounds');
    }

    deleteNode = previous.next;
    previous.next = previous.next.next;     
    return deleteNode;
}

/**
 * delete the linked list
 * @return {Undefined}
 * 
 */
LinkedList.prototype.deleteLinkedList = function() {
    this.head = null;
}

module.exports = LinkedList;