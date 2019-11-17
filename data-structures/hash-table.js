/**
 * Hash Table implementation with basic data structure operations
 */

"use strict";
let LinkedList = require('./linked-list');
const defaultSize = 32;

class HashTable {
    /**
     * Construct an empty Hash Table
     * @return {HashTable} returns a reference to the created HashTable
     */
    constructor(size = defaultSize){
        this.buckets = Array(hashTableSize).fill(null)
                        .map(() => new LinkedList());

        // to provide quick access to keys
        this.keys = {};
    }
}

/**
 * runs hash function on a key
 * @param {Number} key key to be hashd
 * @return {Number} 
 * 
 */
HashTable.prototype.hash = function(key) {

    // simple hash function
    // uses sum of charCodes in key
    const hash = Array.from(key).reduce(
        (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
        0,
    );
  
    // adjust hash so that it fits within the range of this.buckets
    return hash % this.buckets.length;

}

/**
 * runs hash function on a key
 * @param {Number} key key to be hashed
 * @return {Number} 
 * 
 */
HashTable.prototype.set = function(key, data) {

    // hash the key
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketList = this.buckets[keyHash];

    // find node where key is
    const node = bucketList.findByCallback( (v) => v.key === key );

    if (!node) {
      // Insert new node.
      bucketList.insertAtTail( {key: key , data: data} )
    } else {
      // Update value of existing node.
      node.value.value = data;
    }

}

/**
 * determines if a hash table has a specified key
 * @param {Number} key 
 * @return {Boolean} true if this hash table has key else false
 * 
 */
HashTable.prototype.hasKey = function(key) {
    return Object.keys(this.keys);
}

/**
 * returns the keys of a hash table
 * @return {Array} array of keys in this hash table
 * 
 */
HashTable.prototype.getKeys = function() {
    return Object.keys(this.keys);
}

module.exports = HashTable;