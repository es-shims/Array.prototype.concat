'use strict';

var MAX_SAFE_INTEGER = require('es-constants/Number.MAX_SAFE_INTEGER');

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

		var spreadableHasPoisonedIndex = { length: MAX_SAFE_INTEGER };
		spreadableHasPoisonedIndex[Symbol.isConcatSpreadable] = true;
		Object.defineProperty(spreadableHasPoisonedIndex, 0, {
			get: function () { throw new SyntaxError(); }
		});
		try {
			[].concat(spreadableHasPoisonedIndex);
			return implementation;
		} catch (e) {
			if (!e || e.name !== 'SyntaxError') {
				return implementation;
			}
		}
	}

	return Array.prototype.concat;
};
