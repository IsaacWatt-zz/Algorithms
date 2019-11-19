/**
 * Kruskals Jasmine tests
*/

let Graph = require('../../../data-structures/graph/adjacency-list');
let Kruskals = require('../../graph/kruskals');

describe('Basic Tests', function () {

    let kruskals = Kruskals.kruskals;
    
    it('basic tests', function () {

        let undirectedWeightedGraph = new Graph(false); 
        undirectedWeightedGraph.addVertex(1);
        undirectedWeightedGraph.addVertex(2);
        undirectedWeightedGraph.addEdge(1,2, 1);
        // undirectedWeightedGraph.addVertex(1);
        // undirectedWeightedGraph.addVertex(2);
        // undirectedWeightedGraph.addVertex(3);
        // undirectedWeightedGraph.addVertex(4);
        // undirectedWeightedGraph.addVertex(5);
        // undirectedWeightedGraph.addVertex(6);
        // undirectedWeightedGraph.addEdge(1,2, 1);
        // undirectedWeightedGraph.addEdge(3,4, 2);
        // undirectedWeightedGraph.addEdge(5,6, 3);
        // undirectedWeightedGraph.addEdge(3,6, 4);
        // undirectedWeightedGraph.addEdge(1,4, 5);
        // undirectedWeightedGraph.addEdge(2,3, 6);
        // undirectedWeightedGraph.addEdge(4,5, 7);
        kruskals(undirectedWeightedGraph);

    });

});