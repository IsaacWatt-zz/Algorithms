/**
 * BST implementation with basic data structure operations
 */

"use strict";
let Node = require('./binary-tree-node');

class BST {
    /**
     * Construct an empty BST
     * @return {BST} returns a reference to the created BST
     */
    constructor(){
        this.root = null;
    }
}

/**
 * Insert into the BST
 * @param  {Number} data The data inside the node to be inserted
 * @return {Undefined}
 * 
 */ 
BST.prototype.insert = function(data) {
    
    let newNode = new Node(data);
    let currNode = this.getData(data);
    if (currNode != null) currNode = newNode;
    else throw new Error('Error: data already exists in BST');
}

/**
 * get data from BST
 * @param  {Node} data The data to be removed
 * @return {Node|Null} A reference to the Node with data
 * 
 */ 
BST.prototype.getNode = function(data) {
    let currNode = this.root; 

    while (currNode != null && currNode.data != data) {
        if (currNode.data < data) {
            currNode = currNode.right; 
        } else if (currNode.data > data) {
            currNode = currNode.left; 
        }
    }

    return currNode; 
}

/**
 * remove Node from BST
 * @param  {Node} data The data to be removed
 * @return {Node|Null} A reference to the Node with data
 * 
 */ 
BST.prototype.deleteNode = function(data) {
    let currNode = this.root; 

    while (currNode != null && currNode.data != data) {
        if (currNode.data < data) {
            currNode = currNode.right; 
        } else if (currNode.data > data) {
            currNode = currNode.left; 
        }
    }

    return currNode; 
}


/**
 * in order traversal of a BST
 * @param {Function} callback callback method to run on every Node 
 * @return {Undefined} 
 * 
 */ 
BST.prototype.inOrder = function(callback) {
    if (this.root == null) return; 
    (this.left).inOrder(callback); 
    callback(this.data); 
    (this.right).inOrder(callback); 
}

/**
 * pre order traversal of a BST
 * @param {function(int)} callback callback method to run on every Node 
 * @return {Undefined} 
 * 
 */ 
BST.prototype.preOrder = function(callback) {
    if (this.root == null) return; 
    callback(this.data); 
    (this.left).inOrder(callback); 
    (this.right).inOrder(callback); 
}

/**
 * post order traversal of a BST
 * @param {function(int)} callback callback method to run on every Node 
 * @return {Undefined} 
 * 
 */ 
BST.prototype.postOrder = function(callback) {
    if (this.root == null) return; 
    (this.left).inOrder(callback); 
    (this.right).inOrder(callback); 
    callback(this.data); 
}

/**
 * delete this BST
 * @return {Undefined}
 * 
 * 
 */
BST.prototype.deleteBST = function() {
    this.root = null;
}

module.exports = BST;