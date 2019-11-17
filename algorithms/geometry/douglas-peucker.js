let Line = require("../../data-structures/geometry/line");

/**
 * Decimates a polyline into a "similar" polyline with less points
 * @param  {Array} points is an array of points representing a polyline
 * @param  {Number} epsilon is a threshold such that the new polyline has hausdorff distance <= epsilon from the 
 *                  original polyline
 * @return {Array} sub array of input points representing a new polyline such that 
 *                 its hausdorff distance from the origin is <= epsilon and its length is minimum
 * @runtime O(nlogn)
 * @space O(n) stack space
*/
let douglasPeucker = function(points, epsilon) {
    
    const numPoints = points.length;
	if (numPoints <= 2) return points;

    const douglasHelper = function(points, left, right, toleranceSquared) {
        // if we have <= 2 points they need to be kept thus return
        if (right - left <= 1) return;

        // keep track of the index of the point with furthest distance from the segment
        // [left, right] and the distance itself (squared)
        let [index, maxDistanceSquared] = [-1, Number.NEGATIVE_INFINITY];
        
        // find the point in points[left, ..., right] such that it is furthest from 
        // the line segment [left, right]  
        const currLine = new Line(points[left], points[right]);
        for (var i = left + 1; i < right; i++) {
            const distanceSquared = currLine.segmentPointDistanceSquared(points[i]);
            
            if (distanceSquared > maxDistanceSquared) {
                [index, maxDistanceSquared] = [i, distanceSquared];
            }
        }
        
        // if the squared max distance is greater than the squared tolerance
        // we need to keep points[index], and recurse on [left, ..., index] and [index, ..., right]
        if (maxDistanceSquared > toleranceSquared) {
            douglasHelper(points, left, index, toleranceSquared);
            result.push(points[index]);
            douglasHelper(points, index, right, toleranceSquared);
        }
    }

    // push first point 
    let result = [ points[0] ];

    // the algorithm works with squared distance to avoid precision issues brought
    // by square root
    const toleranceSquared = epsilon ** 2;

    douglasHelper(points, 0, numPoints - 1, toleranceSquared);

    // push the last point
    result.push(points[numPoints - 1]);

    return result;
}

module.exports = { douglasPeucker };