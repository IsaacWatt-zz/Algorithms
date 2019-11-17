/**
 * Line Jasmine tests
 */

let Point = require('../geometry/point');
let Line = require('../geometry/line');

describe('Basic Tests', function () {

    let origin = new Point(0, 0); 
    let p1 = new Point(1,1);
    let p2 = new Point(0,1);
    let p3 = new Point(100,100);
    let p4 = new Point(0.5, -0.5);

    let sloped1 = new Line(origin, p1);
    let sloped2 = new Line(p1, origin);

    let horizontalSegment = new Line(origin, p2);
    let horizontalSegment2 = new Line(p2, origin);

    let originLine = new Line(origin, origin);

    it('distance squares', function () {

        // point on line
        expect(sloped1.segmentPointDistanceSquared(p1)).toEqual(0);
        expect(sloped2.segmentPointDistanceSquared(p1)).toEqual(0);
        expect(sloped1.segmentPointDistanceSquared(origin)).toEqual(0);
        expect(sloped2.segmentPointDistanceSquared(origin)).toEqual(0);
        
        // distance 1
        expect(horizontalSegment.segmentPointDistanceSquared(p1)).toEqual(1);
        expect(horizontalSegment2.segmentPointDistanceSquared(p1)).toEqual(1);

        // other
        expect(horizontalSegment.segmentPointDistanceSquared(p3)).toEqual(19801);
        expect(horizontalSegment2.segmentPointDistanceSquared(p3)).toEqual(19801);
        expect(originLine.segmentPointDistanceSquared(p3)).toEqual(20000);

        expect(sloped1.segmentPointDistanceSquared(p2)).toEqual(0.5);
        expect(sloped2.segmentPointDistanceSquared(p2)).toEqual(0.5);

        expect(sloped1.segmentPointDistanceSquared(p4)).toEqual(0.5);
        expect(sloped2.segmentPointDistanceSquared(p4)).toEqual(0.5);
    });

});