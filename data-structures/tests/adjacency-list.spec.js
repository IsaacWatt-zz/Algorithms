/**
 * Adjacency List Jasmine tests
 */

let Graph = require('../graph/adjacency-list');

describe('Basic Tests', function () {

    it('undirected primitive, object', function () {
        let undirectedGraph = new Graph(false); 

        undirectedGraph.addVertex(1);
        undirectedGraph.addVertex(2);
        undirectedGraph.addVertex(3);
        undirectedGraph.addVertex(4);
        undirectedGraph.addVertex(5);
        // undirectedGraph:
        // 1 2 3 4 5

        expect(undirectedGraph.stringify(v => v)).toEqual('1 ->\n2 ->\n3 ->\n4 ->\n5 ->\n');

        undirectedGraph.addEdge(1,2);
        // undirectedGraph:
        // 1-2 3 4 5

        expect(undirectedGraph.stringify(v => v)).toEqual('1 -> 2\n2 -> 1\n3 ->\n4 ->\n5 ->\n');
        
        let undirected2 = new Graph(false);
        let o1 = { "name": "a" };
        let o2 = { "name": "b" };
        let o3 = { "name": "c" };

        undirected2.addVertex(o1);
        undirected2.addVertex(o2);
        undirected2.addVertex(o3);
        // undirected2:
        // a b c

        undirected2.addEdge(o1, o2);
        // undirected2:
        // a-b c
        expect(undirected2.stringify(v => v.name)).toEqual('a -> b\nb -> a\nc ->\n');

        let str = "";
        undirected2.bfs(o1, function (v) { str += v.name; });
        expect(str).toEqual('abc');

        str = "";
        undirected2.dfs(o1, function (v) { str += v.name; });
        expect(str).toEqual('abc');

        // test removing vertex, edge
        undirectedGraph.removeVertex(1);
        expect(undirectedGraph.stringify(v => v)).toEqual('2 ->\n3 ->\n4 ->\n5 ->\n');
        
        undirectedGraph.addEdge(2, 3);
        expect(undirectedGraph.stringify(v => v)).toEqual('2 -> 3\n3 -> 2\n4 ->\n5 ->\n');
        undirectedGraph.removeEdge(2, 3);
        expect(undirectedGraph.stringify(v => v)).toEqual('2 ->\n3 ->\n4 ->\n5 ->\n');
        undirectedGraph.removeVertex(5);
        expect(undirectedGraph.stringify(v => v)).toEqual('2 ->\n3 ->\n4 ->\n');

    });

    it('directed primitive, object', function () {
        let directedGraph = new Graph(true); 
        directedGraph.addVertex(1);
        directedGraph.addVertex(2);
        directedGraph.addVertex(3);
        directedGraph.addVertex(4);
        directedGraph.addVertex(5);
        // directedGraph:
        // 1 2 3 4 5

        expect(directedGraph.stringify(v => v)).toEqual('1 ->\n2 ->\n3 ->\n4 ->\n5 ->\n');
        directedGraph.addEdge(1,2);
        // directedGraph:
        // 1->2 3 4 5

        expect(directedGraph.stringify(v => v)).toEqual('1 -> 2\n2 ->\n3 ->\n4 ->\n5 ->\n');

        let str = "";
        directedGraph.bfs(1, function (v) { str += v; });
        expect(str).toEqual('12345');

        str = "";
        directedGraph.dfs(1, function (v) { str += v; });
        expect(str).toEqual('12345');

        directedGraph.removeEdge(1, 2)
        expect(directedGraph.stringify(v => v)).toEqual('1 ->\n2 ->\n3 ->\n4 ->\n5 ->\n');

        let directed2 = new Graph(true);
        let a = { "name": "a" };
        let b = { "name": "b" };
        let c = { "name": "c" };
        let d = { "name": "d" };

        directed2.addVertex(a);
        directed2.addVertex(b);
        directed2.addVertex(c);
        directed2.addVertex(d);
        // directed2:
        // a b c d

        expect(directed2.stringify(v => v.name)).toEqual('a ->\nb ->\nc ->\nd ->\n');

        directed2.addEdge(a, b);
        directed2.addEdge(b, a);
        // directed2:
        // a<->b c d
        expect(directed2.stringify(v => v.name)).toEqual('a -> b\nb -> a\nc ->\nd ->\n');

        str = "";
        directed2.dfs(a, function (v) { str += v.name; });
        expect(str).toEqual('abcd');

        str = "";
        directed2.dfs(b, function (v) { str += v.name; });
        expect(str).toEqual('bacd');

        directed2.addEdge(d, c);
        // directed2:
        // a<->b c<-d

        str = "";
        directed2.dfs(b, function (v) { str += v.name; });
        expect(str).toEqual('bacd');

        str = "";
        directed2.bfs(b, function (v) { str += v.name; });
        expect(str).toEqual('bacd');

        directed2.addEdge(a, d);
        // directed2:
        // c<-d<-a<->b

        str = "";
        directed2.bfs(a, function (v) { str += v.name; });
        expect(str).toEqual('abdc');

        str = "";
        directed2.dfs(a, function (v) { str += v.name; });
        expect(str).toEqual('abdc');
    });
});