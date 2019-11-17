/**
 * Binary Search Tree Node data structure 
 */

"use strict";

class Node {
    /**
     * Construct a BST Node
     * @param  {Number} data The data inside of the Node
     * @param  {Node} left The left Node of the current Node
     * @param  {Node} right The right Node of the current Node
     * @return {Node} returns a reference to the created Node
     */
    constructor(data, left = null, right = null) {
        this.data = data; 
        this.left = left; 
        this.right = right; 
    }
}

module.exports = Node;