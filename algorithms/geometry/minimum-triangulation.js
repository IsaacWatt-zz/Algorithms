let Point = require("../../data-structures/geometry/point");

/**
 * determines the length of the perimeter of a triangle 
 * described by three points
 * @param {Point} p1 first point describing the triangle
 * @param {Point} p2 second point describing the triangle
 * @param {Point} p3 third point describing the triangle
 * @return {Number} length of the perimeter of triangle p1p2p3
 * 
 * @runtime O(1)
 * @space O(1)
 * 
*/
let trianglePerimeterLength = function(p1, p2, p3) {
    return  Math.sqrt( p1.pointDistanceSquared(p2) ) +
            Math.sqrt( p2.pointDistanceSquared(p3) ) +
            Math.sqrt( p3.pointDistanceSquared(p1) );
}

/**
 * determines the minimum cost of a triangulation of a convex polygon described as a list of Points
 * triangulation of a convex polygon is the process of decomposing a polygon into a set of triangle.
 * the resultant triangle set must have non intersecting interiors and must union to the origin Point list
 * @param {Array} points  points array describing a convex polygon
 * @return {Number} minimum cost of the triangulation of the polygon described by input points array
 * 
 * @runtime O(n^3)
 * @space O(n^2)
 * 
*/
let minimumTriangulation = function(points) {
    let n = points.length;
    if (n < 3) return 0; 

    // 2D DP Table 
    let dp = new Array(n).fill(null).map(item =>(new Array(n).fill(null)));
    // dp[i, j] denotes the optimal solution to the subproblem consisting 
    // of the polygon having vertices q_i ,..., q_j

    // dp[i, j] = min {
    //              ∆(q_i, q_k , q_j) + dp[i, k] + dp[k, j] : i < k < j
    //            }
    // We compute all dp[i, j] with j − i = c, for c = 2, 3, · · · , n − 1

    for (let gap = 0; gap < n; ++gap) { 
        for (let i = 0, j = gap; j < n; ++i, ++j) { 
            if ( j < i + 2 ) {
                dp[i][j] = 0; 
            } else { 
                dp[i][j] = Infinity; 
                for (let k = i+1; k < j; k++) { 
                    let val = dp[i][k] + dp[k][j] + trianglePerimeterLength(points[i], points[j], points[k]); 
                    dp[i][j] = Math.min(dp[i][j], val); 
                } 
            } 
        } 
    } 

    return  dp[0][n-1]; 
}

module.exports = { minimumTriangulation };