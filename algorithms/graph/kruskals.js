let Graph = require('../../data-structures/graph/adjacency-list');
let DisjointSet = require('../../data-structures/list/disjoint-set');

/**
 * produces a minimum spanning forest containing a subset of the vertices and edges of the input graph
 * @param  {Graph} G graph to build the minimum spanning forest from
 * @return {Graph} minimum spanning tree produced by kruskals algorithm
 * 
 * @runtime O(|E|log|E|)
 * @space O(|V| + |E|)
 * 
*/
let kruskals = function(G) {
    if (G.isDirected) throw new Error("Kruskals algorithm only works on undirected graphs");

    let minSpanningTree = new Graph();
    let visitedVertices = new DisjointSet(G.compareCallback);

    // get all edges in G and sort them in order of increasing weight
    let edges = [];
    for (const [vertex, list] of G.adj) {
        minSpanningTree.addVertex(vertex);
        visitedVertices.makeSet(vertex);
        for (const dest of list) {
            edges.push({source: vertex, dest: dest.node, weight: dest.weight});
        }
    }
    edges = edges.sort( (node1, node2) => node1.weight - node2.weight );

    // greedily take edges of least weight and append them to the resultant
    // minimum spanning tree so long as adding the edge will not result in a cycle
    for (let edge of edges) {
        if (!visitedVertices.isConnected(edge.source, edge.dest)) {
            visitedVertices.union(edge.source, edge.dest);
            minSpanningTree.addEdge(edge.source, edge.dest, edge.weight);
        }
    }

    return minSpanningTree
}

module.exports = { kruskals };
