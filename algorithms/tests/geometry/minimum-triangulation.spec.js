/**
 * Minimum Triangulation Jasmine tests
 */

let MinimumTriangulation = require('../../geometry/minimum-triangulation');
let Point = require('../../../data-structures/point');
let Line = require('../../../data-structures/line');

describe('Basic Tests', function () {
    let minimumTriangulation = MinimumTriangulation.minimumTriangulation;

    let origin = new Point(0, 0); 
    let p1 = new Point(3,4);
    let p2 = new Point(3,0);
    let p3 = new Point(0,4);
    let p4 = new Point(5, 0);
    let p5 = new Point(0, 12);
    let p6 = new Point(5, 12);
    let p7 = new Point(1, 0); 
    let p8 = new Point(2, 1); 
    let p9 = new Point(1, 2);
    let p10 = new Point(0, 2);

    it('3 point primitive Pythagorean triples', function () {
        expect( minimumTriangulation( [origin, p2, p3] ) ).toEqual( 12 );
        expect( minimumTriangulation( [origin, p4, p5] ) ).toEqual( 30 );
    });
    
    it('squares', function () {
        expect( minimumTriangulation( [origin, p2, p1, p3] ) ).toEqual( 24 );
        expect( minimumTriangulation( [origin, p4, p6, p5] ) ).toEqual( 60 );
    });

    it('other', function () {
        expect( minimumTriangulation( [origin, p7, p8, p9, p10] ).toFixed(7) ).toEqual( '15.3005631' );
    });
});