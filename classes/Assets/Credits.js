/**
 * Class representing credits rows.
 *
 * This description should be revised and expanded.
 *
 * @module Assets
 */
var Q = require('Q');
var Db = Q.require('Db');
var Credits = Q.require('Base/Assets/Credits');

/**
 * Class representing 'Credits' rows in the 'Assets' database
 * @namespace Assets
 * @class Credits
 * @extends Base.Assets.Credits
 * @constructor
 * @param {Object} fields The fields values to initialize table row as
 * an associative array of {column: value} pairs
 */
function Assets_Credits (fields) {

	// Run mixed-in constructors
	Assets_Credits.constructors.apply(this, arguments);
	
	/*
 	 * Add any privileged methods to the model class here.
	 * Public methods should probably be added further below.
	 */
}

Q.mixin(Assets_Credits, Credits);

/*
 * Add any public methods here by assigning them to Assets_Credits.prototype
 */

/**
 * The setUp() method is called the first time
 * an object of this class is constructed.
 * @method setUp
 */
Assets_Credits.prototype.setUp = function () {
	// put any code here
	// overrides the Base class
};

module.exports = Assets_Credits;