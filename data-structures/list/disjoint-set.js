/**
 * Disjoint Set Node Data Structure and basic operations
 */

"use strict";

class DisjointSet {
    /**
     * Construct an empty DisjointSet
     * @return {DisjointSet} returns a reference to the created DisjointSet
     */
    constructor(compareCallback = undefined) {
        this.compareCallback = compareCallback ? compareCallback : (item1, item2) => item1 === item2;
        this.items = new Map();
        this.numSets = 0;
    }
}

/**
 * creates a new DisjointSet Node with data and adds it to the disjoint set
 * @param {Any} data data to be put inside the set node
 * @return {Undefined}
 * 
 */
DisjointSet.prototype.makeSet = function(data) {

    // check if data is already inside of the disjoint set
    for (let item of this.items.keys()){
        if (this.compareCallback(item, data)) throw new Error("data already exists in the set");
    }

    // add data to items
    this.items.set(data, {
        parent: data, 
        size: 1
    });

    ++this.numSets;
}

/**
 * find set which data belongs to
 * @param {Any} data item to be searched for inside the disjoint set
 * @return {Undefined}
 * 
 */
DisjointSet.prototype.find = function(data) {

    // traverse upward until reaching the root node
    let root = data;
    let parent = this.items.get(root).parent
    while (!this.compareCallback(root, parent)) {
        root = parent;
        parent = this.items.get(root).parent;
    }

    // compress the path leading back to root
    // that is, make every items parent the root
    while (!this.compareCallback(data, root)) {
        let next = this.items.get(data).parent;
        this.items.set(data, this.items.get(root));
        data = next;
    }
    
    return root;
}

/**
 * determines if two pieces of data are in the same set
 * @param {Any} item1
 * @param {Any} item2
 * @return {Boolean} true if item1 and item2 are the same data
 * 
 */
DisjointSet.prototype.isConnected = function(item1, item2) {
    return this.compareCallback( this.find(item1), this.find(item2) );
}

/**
 * union two sets containing (possibly different) data into one set
 * @param {Any} item1 data specifying which is the first set to union
 * @param {Any} item2 data specifying which is the second set to union
 * @return {Undefined}
 * 
 */
DisjointSet.prototype.union = function(item1, item2) {
    let root1 = this.items.get(this.find(item1));
    let root2 = this.items.get(this.find(item2));

    if (this.compareCallback(root1.parent, root2.parent)) return;

    if (root1.size >= root2.size) {
        root1.size += root2.size;
        this.items.set(root2.parent, root1);
    } else {
        root2.size += root1.size; 
        this.items.set(root1.parent, root2);
    }

    --this.numSets;
}

/**
 * Creates a String interpretation of the Disjoint Set
 * @param {Function} itemCallback callback which returns string interpretation of an item in the set
 * @return {Undefined}
 * 
 */
DisjointSet.prototype.stringify = function(itemCallback) {

    // create a parent->[children] map
    let parentToChildren = new Map(); 
    for (let item of this.items.keys()) {
        let itemsParent = this.find(item);
        if (parentToChildren.has(itemsParent)) {
            parentToChildren.set( itemsParent, parentToChildren.get(itemsParent).concat([item]) );
        } else {
            parentToChildren.set( itemsParent, [item] );
        }
    }

    // append parent with its children to res
    let res = "";
    for (let [parent, children] of parentToChildren) {
        res += itemCallback(parent) + "->(";
        children.forEach((child) => { res += " " + itemCallback(child); });
        res += " )\n";
    }

    return res;
}

module.exports = DisjointSet;