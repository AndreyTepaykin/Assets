/**
 * Class representing connected rows.
 *
 * This description should be revised and expanded.
 *
 * @module Assets
 */
var Q = require('Q');
var Db = Q.require('Db');
var Connected = Q.require('Base/Assets/Connected');

/**
 * Class representing 'Connected' rows in the 'Assets' database
 * @namespace Assets
 * @class Connected
 * @extends Base.Assets.Connected
 * @constructor
 * @param {Object} fields The fields values to initialize table row as
 * an associative array of {column: value} pairs
 */
function Assets_Connected (fields) {

	// Run mixed-in constructors
	Assets_Connected.constructors.apply(this, arguments);
	
	/*
 	 * Add any privileged methods to the model class here.
	 * Public methods should probably be added further below.
	 */
}

Q.mixin(Assets_Connected, Connected);

/*
 * Add any public methods here by assigning them to Assets_Connected.prototype
 */

/**
 * The setUp() method is called the first time
 * an object of this class is constructed.
 * @method setUp
 */
Assets_Connected.prototype.setUp = function () {
	// put any code here
	// overrides the Base class
};

module.exports = Assets_Connected;