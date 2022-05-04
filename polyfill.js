'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!Array.prototype.concat) {
		return implementation;
	}

	if (typeof Symbol === 'function' && Symbol.isConcatSpreadable) {
		var a = [];
		a[Symbol.isConcatSpreadable] = false;

		var o = { 0: 1, length: 1 };
		o[Symbol.isConcatSpreadable] = true;

		if ([].concat(a)[0] !== a || [].concat(o)[0] === o) {
			return implementation;
		}

		var o2 = { length: Math.pow(2, 53) - 1 };
		o2[Symbol.isConcatSpreadable] = true;
		try {
			[1].concat(o2);
			return implementation;
		} catch (e) {
			if (!e || e.name !== 'TypeError') {
				return implementation;
			}
		}
	}

	return Array.prototype.concat;
};
