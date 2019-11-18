/**
 * Adjacency List Jasmine tests
 */

let DisjointSet = require('../list/disjoint-set');

describe('Basic Tests', function () {

    it('basic tests', function () {
        let set = new DisjointSet();
        set.makeSet(1);
        expect(set.numSets).toEqual(1);
        set.makeSet(2);
        expect(set.numSets).toEqual(2);
        set.makeSet(4);
        expect(set.numSets).toEqual(3);
        // set: 1 2 3
        expect(set.find(1)).toEqual(1);
        expect(set.find(2)).toEqual(2);
        set.union(1, 2);
        // set: 1<-(2) (3)

        expect(set.numSets).toEqual(2);
        expect(set.isConnected(1, 2)).toEqual(true);
        set.makeSet(3);
        set.makeSet(5);
        set.makeSet(6);
        // set: 1<-(2) (3) (4) (5) (6)

        expect(set.numSets).toEqual(5);
        set.union(1, 4);
        // set: 1<-(2,4) (3) (5) (6) 

        expect(set.numSets).toEqual(4);
        
        expect(set.stringify((item) => item)).toEqual(
        "1->( 1 2 4 )\n3->( 3 )\n5->( 5 )\n6->( 6 )\n"
        );

        set.union(3, 2);
        // set: 1<-(2,4,3) (5) (6) 

        expect(set.numSets).toEqual(3);
        expect(set.stringify((item) => item)).toEqual(
            "1->( 1 2 4 3 )\n5->( 5 )\n6->( 6 )\n"
        );

        expect(function() {set.union(1, 2)}).toThrowError;
        set.union(5, 6);
        // set: 1<-(2,4,3) 5<-(6) 

        expect(set.stringify((item) => item)).toEqual(
            "1->( 1 2 4 3 )\n5->( 5 6 )\n"
        );

        set.union(1, 5); 
        expect(set.stringify((item) => String(item))).toEqual(
            "1->( 1 2 4 3 5 6 )\n"
        );

        expect(set.find(5)).toEqual(1);
        expect(set.find(6)).toEqual(1);

    });

});