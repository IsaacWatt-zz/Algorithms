/**
 * Polygon structure with basic data structure operations
 */

"use strict";
let Line = require('../geometry/line');

class Polygon {
    /**
     * Construct a Polygon
     * @return {Polygon} returns a reference to the created Polygon
     */
    constructor() {
        this.points = []; 
    }
}

module.exports = Polygon;