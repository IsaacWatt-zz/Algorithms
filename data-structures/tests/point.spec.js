/**
 * Point Jasmine tests
 */

let Point = require('../point');

describe('Basic Tests', function () {

    let origin = new Point(0, 0); 
    let p1 = new Point(1,1);
    let p2 = new Point(1,1);
    let p3 = new Point(-1,-1);
    let vertical1 = new Point(0, 5);
    let horizontal1 = new Point(5, 0);
    let farRight = new Point(20, 2);
    let farLeft = new Point(-20, 2);

    it('distance squares', function () {

        // zero distance squared
        expect(origin.pointDistanceSquared(origin)).toEqual(0);
        expect(p1.pointDistanceSquared(p1)).toEqual(0);
        expect(p2.pointDistanceSquared(p1)).toEqual(0);

        // origin to point
        expect(origin.pointDistanceSquared(p1)).toEqual(2);
        expect(origin.pointDistanceSquared(p3)).toEqual(2);
        expect(origin.pointDistanceSquared(vertical1)).toEqual(25);
        expect(origin.pointDistanceSquared(horizontal1)).toEqual(25);

        // other
        expect(vertical1.pointDistanceSquared(horizontal1)).toEqual(50);
        expect(p1.pointDistanceSquared(p3)).toEqual(8);
    });

    it('calculates orientation', function () {

        // colinear
        expect(origin.orientation(origin, origin)).toEqual(0);
        expect(origin.orientation(p1, origin)).toEqual(0);
        expect(origin.orientation(p1, p2)).toEqual(0);
        expect(p3.orientation(origin, p1)).toEqual(0);

        // clockwise
        expect(origin.orientation(p1, farRight)).toEqual(1);
        expect(origin.orientation(vertical1, farRight)).toEqual(1);

        // counter clockwise
        expect(origin.orientation(p1, farLeft)).toEqual(-1);
        expect(origin.orientation(vertical1, farLeft)).toEqual(-1);

    });
});