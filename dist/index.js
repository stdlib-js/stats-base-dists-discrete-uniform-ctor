/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution constructor.
*
* @module @stdlib/stats-base-dists-discrete-uniform-ctor
*
* @example
* var DiscreteUniform = require( '@stdlib/stats-base-dists-discrete-uniform-ctor' );
*
* var discreteUniform = new DiscreteUniform( 0, 8 );
*
* var y = discreteUniform.cdf( 0.8 );
* // returns ~0.111
*
* var mu = discreteUniform.mean;
* // returns 4.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
