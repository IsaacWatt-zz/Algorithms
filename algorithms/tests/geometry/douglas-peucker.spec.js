/**
 * Douglas Peucker Jasmine tests
 */

let Douglas = require('../../geometry/douglas-peucker');
let Point = require('../../../data-structures/point');
let Line = require('../../../data-structures/line');

describe('Basic Tests', function () {
    let douglas = Douglas.douglasPeucker;

    let origin = new Point(0, 0); 
    let p1 = new Point(1,1);
    let p2 = new Point(0,1);
    let p3 = new Point(0.001, 0.001);
    let p4 = new Point(100, 100);

    let p5 = new Point(0.5, 0.5); 
    let p6 = new Point(0.6, 0.4); 
    let p7 = new Point(1, 0);
    
    it('basic tests', function () {
        expect( douglas( [origin, p1], 0 ) ).toEqual( [origin, p1] );
        expect( douglas( [origin, p2, p1], 0 ) ).toEqual( [origin, p2, p1] );
        expect( douglas( [p2, origin, p1], 1 ) ).toEqual( [p2, p1] );

        expect( douglas( [origin, p3, p1], 0.01 ) ).toEqual( [origin, p1] );
        expect( douglas( [origin, p4, origin], 500 ) ).toEqual( [origin, origin] );
        expect( douglas( [origin, p5, p6, p7], 1 ) ).toEqual( [origin, p7] );
        expect( douglas( [origin, p6, p7], 0.4 ) ).toEqual( [origin, p7] );
    });
    
});