/**
 * Node data structure 
 */

"use strict";

class Node {
    /**
     * Construct a Node
     * @param  {Any} data The data inside of the Node
     * @param  {Node} next The Node which is pointed to
     * @return {Node} returns a reference to the created Node
     */
    constructor(data, next = null) {
        this.data = data; 
        this.next = next; 
    }
}

module.exports = Node;