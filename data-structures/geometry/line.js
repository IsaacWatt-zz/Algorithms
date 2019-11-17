/**
 * Line data structure with basic data structure operations
 */

"use strict";
let Point = require('../geometry/point');

class Line {
    /**
     * Construct a Line
     * @param  {Point} p1 first point defining the line
     * @param  {Point} p2 second point defining the line
     * @return {Line} returns a reference to the created Line
     */
    constructor(p1, p2) {
        this.p1 = p1; 
        this.p2 = p2; 
    }
}

/**
 *  Determines the squared distance from a point to a line segment
 * @param {Point} point
 * @return {Number} squared distance from point to line segment
 * inspired by: http://paulbourke.net/geometry/pointlineplane/
 * 
 */
Line.prototype.segmentPointDistanceSquared = function(point) {
    let x1 = this.p1.x, y1 = this.p1.y;
    let x2 = this.p2.x, y2 = this.p2.y;

    let dx = x2 - x1, dy = y2 - y1; 
    
    // euclidean distance of line segment
    let segmentLengthSquared = (this.p1).pointDistanceSquared(this.p2);
   
    // if out Line is actually a point, return the point distance
    if (segmentLengthSquared == 0) return this.p1.pointDistanceSquared(point);

    let t = ((point.x - x1) * dx + 
             (point.y - y1) * dy) / segmentLengthSquared;
             
    // if t < 0 the point is closest to this.p1
    if (t < 0) return point.pointDistanceSquared(this.p1);

    // if t > 1 the point is closest to this.p2 
    if (t > 1) return point.pointDistanceSquared(this.p2);

    // calculate the point on the Line segment such that is is closest to 
    // the parameter point
    let closestPoint = new Point(x1 + (t * dx), y1 + (t * dy));

    // return the distance from closestPoint and point
    return point.pointDistanceSquared(closestPoint);
}

module.exports = Line;