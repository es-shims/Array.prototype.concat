'use strict';

var ArraySpeciesCreate = require('es-abstract/2024/ArraySpeciesCreate');
var CreateDataPropertyOrThrow = require('es-abstract/2024/CreateDataPropertyOrThrow');
var Get = require('es-abstract/2024/Get');
var HasProperty = require('es-abstract/2024/HasProperty');
var IsConcatSpreadable = require('es-abstract/2024/IsConcatSpreadable');
var LengthOfArrayLike = require('es-abstract/2024/LengthOfArrayLike');
var Set = require('es-abstract/2024/Set');
var ToObject = require('es-object-atoms/ToObject');
var ToString = require('es-abstract/2024/ToString');

var forEach = require('es-abstract/helpers/forEach');
var MAX_SAFE_INTEGER = require('es-abstract/helpers/maxSafeInteger');

var $TypeError = require('es-errors/type');
var callBound = require('call-bind/callBound');
var isString = require('is-string');
var $Object = require('es-object-atoms');

// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var strSplit = callBound('String.prototype.split');

// eslint-disable-next-line no-unused-vars
module.exports = function concat(items) {
	var O = ToObject(this); // step 1

	var A = ArraySpeciesCreate(O, 0); // step 2
	var n = 0; // step 3

	var steps = function (E) {
		var spreadable = IsConcatSpreadable(E); // step 5.a
		if (spreadable) {
			var k = 0; // step 5.b.i

			var self = splitString && isString(E) ? strSplit(E, '') : E;
			var len = LengthOfArrayLike(self); // step 5.b.ii

			if ((n + len) > MAX_SAFE_INTEGER) {
				throw new $TypeError('todo'); // step 5.b.iii
			}

			while (k < len) {
				var P = ToString(k); // step 5.b.iv.1
				var exists = HasProperty(E, P); // step 5.b.iv.2
				if (exists) {
					var subElement = Get(E, P); // step 5.b.iv.3.a
					CreateDataPropertyOrThrow(A, ToString(n), subElement); // step 5.b.iv.3.b
				}
				n += 1; // step 5.b.iv.4
				k += 1; // step 5.b.iv.5
			}
		} else {
			if (n >= MAX_SAFE_INTEGER) {
				throw new $TypeError('todo'); // step 5.c.ii
			}
			CreateDataPropertyOrThrow(A, ToString(n), E); // step 5.c.iii
			n += 1; // step 5.c.iv
		}
	};
	steps(O); // step 4, kinda
	forEach(arguments, steps); // step 5

	Set(A, 'length', n, true); // step 6

	return A; // step 7
};

module.exports.prototype = undefined;
