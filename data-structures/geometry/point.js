/**
 * Point data structure with basic data structure operations
 */

"use strict";

class Point {
    /**
     * Construct a Point
     * @param  {Number} x the x coordinate of the point
     * @param  {Number} y the y coordinate of the point
     * @return {Point} returns a reference to the created Point
     */
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
    }
}

/**
 * Determines the squared distance between two points
 * @param {Point} point
 * @return {Number} squared distance from this point to the point parameter
 * 
 */
Point.prototype.pointDistanceSquared = function(point) {
    return (this.x - point.x) ** 2 + (this.y - point.y) ** 2;
}

/**
 * Determines the orientation of an ordered triplet (this, p2, p3)
 * Note the orientation of an ordered triplet is either
 * clockwise, counterclockwise, or colinear
 * @param {Point} p2
 * @param {Point} p3
 * @return {Number} Number representing orientation 
 *                  (-1 => counterclockwise
 *                  0 => colinear
 *                  1 => clockwise)
 * 
 */
Point.prototype.orientation = function(p2, p3) {
    let p1 = this; 

    // if slope of p1p2 > slope of p2p3 then the orientation is clockwise
    // if their slopes are equal then the orientation is colinear
    // if slope of p1p2 < slope of p2p3 then the orientation is counterclockwise
    let t = (p2.y - p1.y) * (p3.x - p2.x) - 
            (p2.x - p1.x) * (p3.y - p2.y); 

    if (t == 0) return 0;
    return (t > 0)? 1 : -1;
}

module.exports = Point;