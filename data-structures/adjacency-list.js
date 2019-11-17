/**
 * Adjacency List data structure with basic data structure operations
 */

"use strict";

class Graph {
    
    /**
     * Construct a Graph
     * @return {Node} returns a reference to the created Node
     */
    constructor(isDirected = false)  {
        this.adj = new Map();
        this.numVerticies = 0;
        this.isDirected = isDirected;
    }
}

/**
 * adds a vertex to a Graph
 * @param {Any} vertex to be added to graph 
 * @return {Undefined}
 * 
 */
Graph.prototype.addVertex = function(v) {
    this.adj.set(v, []); 
    ++this.numVerticies;
}

/**
 * adds an edge from v to w in a Graph
 * @param {Verex} v vertex in which edge is outgoing from
 * @param {Verex} w vertex in which edge incoming to
 * @return {Undefined}
 * 
 */
Graph.prototype.addEdge = function(v, w) {

    if (!this.adj.has(v) || !this.adj.has(v))
        throw new Error("Invalid vertices passed into addEdge");
 
    // get list for v and push w onto it, 
    this.adj.get(v).push(w); 

    // if the graph is undirected we do the same for w
    if (!this.isDirected) this.adj.get(w).push(v); 
}

/**
 * Performs Breadth First Search, running a callback at each node
 * @param  {Node} start is the Vertex to begin traversing at 
 * @param  {Function} callbackFn a function to run at each vertex of the traversal
 * @return {Undefined}
 * 
 * @runtime O(|V| + |E|)
 * @space O(|V|)
*/
Graph.prototype.bfs = function(start, callback) {
    let Queue = require('./queue');

    let BFSUtility = function(curr, adj) {
        // begin with start node
        visited.set(curr, true);
        q.enqueue(curr); 

        while (!q.isEmpty()) {
            let queueElement = q.dequeue(); 
            callback(queueElement); 

            let currAdjList = adj.get(queueElement);   
            // loop through the list and add the element to the 
            // queue if it is not processed yet 

            for (const neighbour of currAdjList) { 
                if (!visited.has(neighbour)) { 
                    visited.set(neighbour, true);
                    q.enqueue(neighbour); 
                } 
            } 
        }
    }

    let visited = new Map();
    let q = new Queue(); 
    BFSUtility(start, this.adj);

    // check for disconnected components
    for (const [vertex, adjList] of this.adj) {
        if (!visited.has(vertex)) {
            BFSUtility(vertex, this.adj);
        }
    }
    
}

/**
 * Performs Depth First Search, running a callback at each node
 * @param  {Node} start is the Vertex to begin traversing at 
 * @param  {Function} callback a callback to run at each vertex of the traversal
 * @return {Undefined}
 * 
 * @runtime O(|V| + |E|)
 * @space O(|V|) stack space
*/
Graph.prototype.dfs  = function(start, callback) {
    
    // runs depth first search beginning at vertex curr
    // (note this will not reach components of the graph disconnected from curr)
    let dfsUtility = function(curr, adj) {
        visited.set(curr, true);
        callback(curr);

        // recurse on each non visited neighbour of curr
        let neighbours = adj.get(curr); 
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                dfsUtility(neighbour, adj);
            }
        }
    }

    let visited = new Map();
    dfsUtility(start, this.adj);
     
    // check for disconnected components
    for (const [vertex, adjList] of this.adj)
        if (!visited.has(vertex))
            dfsUtility(vertex, this.adj);
}

/**
 * Stringifies a Graph
 * @param  {Function} callback a callback which returns how the data at each node should be
 *                    converted to a string
 * @return {String} a String interpretation of the Graph
 * 
 * @runtime O(|V| + |E|)
 * @space O(|V| + |E|)
 */
Graph.prototype.stringify = function(callback) {
    let graphAsString = "";
    let vertices = this.adj.keys(); 

    for (let vertex of vertices) {
        let outEdges = this.adj.get(vertex); 
        let currStr = "";
        
        for (let neighbour of outEdges) 
            currStr += " " + callback(neighbour);

        graphAsString += `${callback(vertex)} ->${currStr}\n`;
    }
    return graphAsString;
}

module.exports = Graph;