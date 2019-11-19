/**
 * Adjacency List data structure with basic data structure operations
 */
"use strict";

class Graph {
    /**
     * Construct a Graph
     * @param {Function} compareCallback a callback specifying how to compare items in the adjacency list
     * @return {Graph} returns a reference to the created Graph
     */
    constructor(isDirected = false, compareCallback = undefined)  {
        this.adj = new Map();
        this.numVerticies = 0;
        this.isDirected = isDirected;
        this.compareCallback = compareCallback ? compareCallback : (item1, item2) => item1 === item2;
    }
}

/**
 * adds a vertex to a Graph
 * @param {Any} vertex to be added to graph 
 * @return {Undefined}
 * 
 */
Graph.prototype.addVertex = function(v) {

    // check if v is already in the graph
    for (let vertex of this.adj.keys()) {
        if (this.compareCallback(v, vertex)) throw new Error("v already exists in graph")
    }

    this.adj.set(v, []); 
    ++this.numVerticies;
}

/**
 * returns reference to Node in graph containing data v
 * @param {Any} v data to search for corresponding Node in graph
 * @return {Node|Null} reference to Node in graph containing v if it exists, Null otherwise
 * 
 */
Graph.prototype.getVertex = function(v) {

    // check if v is already in the graph
    for (let vertex of this.adj.keys()) {
        if (this.compareCallback(v, vertex)) return vertex;
    }

    return null;
}

/**
 * gets associated adjacency list for vertex containing data v
 * @param {Any} v data to search for corresponding Node in graph
 * @return {Array|Null} reference to v's adjacency list in graph if Node with data v exists, Null otherwise
 * 
 */
Graph.prototype.getAdjList = function(v) {

    // check if v is already in the graph
    for (let [vertex, adjList] of this.adj) {
        if (this.compareCallback(v, vertex)) return adjList;
    }

    return null;
}

/**
 * removes a vertex from a Graph
 * @param {Any} v data to search for corresponding Node in graph
 * @return {Undefined}
 * 
 */
Graph.prototype.removeVertex = function(v) {
    
    // traverse graph removing all incoming edges to v
    for (let [vertex, adjList] of this.adj) {
        // remove vertices that are compareCallback equal to v

        adjList = adjList.filter(e => !this.compareCallback(e.node, v));
        this.adj.set(vertex, adjList); 
        // if the current vertex is compareCallback equal to v, remove it
        if (this.compareCallback(v, vertex)) this.adj.delete(vertex); 
    }
}

/**
 * adds an edge from Node with data v to Node with data w in a Graph
 * @param {Any} v vertex data in which edge is outgoing from
 * @param {Any} w vertex data in which edge incoming to
 * @param {Number} weight the weight of edge from v to w
 * @return {Undefined}
 * 
 */
Graph.prototype.addEdge = function(v, w, weight = 0) {

    let addEdgeDirected = function(v, w, adj) {
        for (let [vertex, adjList] of this.adj) {
            if (this.compareCallback(v, vertex)) {
                let wNode = this.getVertex(w);
                adjList.push({
                    node: wNode,
                    weight: weight
                }); 
                this.adj.set(vertex, adjList);
            }
        }
    }
    addEdgeDirected = addEdgeDirected.bind(this);

    addEdgeDirected(v, w);
    if (!this.isDirected) addEdgeDirected(w, v);
}

/**
 * removed edge from v to w in a Graph
 * @param {Verex} v vertex data in which edge is outgoing from
 * @param {Verex} w vertex data in which edge incoming to
 * @return {Undefined}
 * 
 */
Graph.prototype.removeEdge = function(v, w) {
    
    let removeEdgeDirected = function(v, w) {
        for (let [vertex, adjList] of this.adj) {
            if (this.compareCallback(v, vertex)) {
                let wNode = this.getVertex(w);
                adjList = adjList.filter(e => e.node !== wNode);
                this.adj.set(vertex, adjList);
            }
        }
    }
    removeEdgeDirected = removeEdgeDirected.bind(this);


    removeEdgeDirected(v, w);
    if (!this.isDirected) removeEdgeDirected(w, v);
}

/**
 * Performs Breadth First Search, running a callback at each node
 * @param  {Node} start is the vertex data to begin traversing at 
 * @param  {Function} callback a function to run at each vertex of the traversal
 * @return {Undefined}
 * 
 * @runtime O(|V| + |E|)
 * @space O(|V|)
*/
Graph.prototype.bfs = function(start, callback) {
    let Queue = require('../list/queue');

    let BFSUtility = function(curr) {
        // begin with start node
        visited.set(curr, true);
        q.enqueue(curr); 

        while (!q.isEmpty()) {
            let queueElement = q.dequeue(); 
            callback(queueElement); 
            
            // find queueElement in adj
            let currAdjList = this.getAdjList(queueElement);  
            // loop through the list and add the element to the 
            // queue if it is not processed yet 
            
            for (const neighbour of currAdjList) { 
                if (!visited.has(neighbour.node)) { 
                    visited.set(neighbour.node, true);
                    q.enqueue(neighbour.node); 
                }
            } 
        }
    }
    BFSUtility = BFSUtility.bind(this);

    let visited = new Map();
    let q = new Queue(); 
    BFSUtility(start);

    // check for disconnected components
    for (const vertex of this.adj.keys()) {
        if (!visited.has(vertex)) {
            BFSUtility(vertex);
        }
    }
    
}

/**
 * Performs Depth First Search, running a callback at each node
 * @param  {Any} start is the vertex data to begin traversing at 
 * @param  {Function} callback a callback to run at each vertex of the traversal
 * @return {Undefined}
 * 
 * @runtime O(|V| + |E|)
 * @space O(|V|) stack space
*/
Graph.prototype.dfs = function(start, callback) {
    
    // runs depth first search beginning at vertex curr
    // (note this will not reach components of the graph disconnected from curr)
    let dfsUtility = function(curr) {
        visited.set(curr, true);
        callback(curr);

        // recurse on each non visited neighbour of curr
        let neighbours = this.getAdjList(curr);  
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour.node)) {
                dfsUtility(neighbour.node);
            }
        }
    }
    dfsUtility = dfsUtility.bind(this);

    let visited = new Map();
    dfsUtility(start);
     
    // check for disconnected components
    for (const vertex of this.adj.keys())
        if (!visited.has(vertex))
            dfsUtility(vertex);
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
Graph.prototype.stringify = function(callback = (item) => item) {
    let graphAsString = "";
    let vertices = this.adj.keys(); 

    for (let vertex of vertices) {
        let outEdges = this.adj.get(vertex);     
        graphAsString += `${callback(vertex)}\n`;
        for (let neighbour of outEdges) 
            graphAsString += `-(${neighbour.weight})->` + callback(neighbour.node) + "\n";
    }

    return graphAsString;
}

module.exports = Graph;