'use strict';

var hasSymbols = require('has-symbols')();
var supportsDescriptors = require('define-properties').supportsDescriptors;
var MAX_SAFE_INTEGER = require('es-constants/Number.MAX_SAFE_INTEGER');

var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.
// eslint-disable-next-line no-sparse-arrays, array-bracket-spacing
var holesExist = !(0 in [, ]); // FF 3 fails this check

module.exports = function (concat, t) {
	var array = [1, 2];
	var sparseArray = [3, , undefined, 4]; // eslint-disable-line no-sparse-arrays
	var arrayLike = { 0: 5, 1: 6, length: 2 };

	t.deepEqual(
		concat([1, 2]),
		[1, 2],
		'works: receiver'
	);
	t.deepEqual(
		concat([], [1, 2]),
		[1, 2],
		'works: argument'
	);

	t.deepEqual(
		concat(sparseArray),
		sparseArray,
		'holes are preserved: receiver'
	);

	if (holesExist) {
		t.equal(1 in concat(sparseArray), false, 'hole is present: receiver');
		t.equal(2 in concat(sparseArray), canDistinguishSparseFromUndefined, 'undefined is present: receiver');
	}
	t.deepEqual(
		concat([], sparseArray),
		sparseArray,
		'holes are preserved: argument'
	);
	if (holesExist) {
		t.equal(1 in concat([], sparseArray), false, 'hole is present: argument');
		t.equal(2 in concat([], sparseArray), canDistinguishSparseFromUndefined, 'undefined is present: argument');
	}

	t.deepEqual(
		concat(arrayLike),
		[{ 0: 5, 1: 6, length: 2 }],
		'non-spreadable arrayLike is not spreaded: receiver'
	);
	t.deepEqual(
		concat([], arrayLike),
		[{ 0: 5, 1: 6, length: 2 }],
		'non-spreadable arrayLike is not spreaded: argument'
	);

	t.deepEqual(
		concat(array, sparseArray, arrayLike),
		[1, 2, 3, , undefined, 4, arrayLike], // eslint-disable-line no-sparse-arrays
		'combo works'
	);

	t.test('Symbol.isConcatSpreadable', { skip: !hasSymbols || !Symbol.isConcatSpreadable }, function (st) {
		var o = { length: Math.pow(2, 53) - 1 };
		o[Symbol.isConcatSpreadable] = true;
		st['throws'](
			function () { concat([1, 2], o); },
			TypeError,
			'trying to create a length larger than MAX_SAFE_INTEGER throws: arraylike argument'
		);

		var nonSpreadableArray = [7, 8];
		nonSpreadableArray[Symbol.isConcatSpreadable] = false;
		st.deepEqual(
			concat(nonSpreadableArray),
			[[7, 8]],
			'non-spreadable array works: receiver'
		);
		st.deepEqual(
			concat([], nonSpreadableArray),
			[[7, 8]],
			'non-spreadable array works: argument'
		);

		var spreadableArrayLike = { 0: 9, 1: 0, length: 2 };
		spreadableArrayLike[Symbol.isConcatSpreadable] = true;
		st.deepEqual(
			concat(spreadableArrayLike),
			[9, 0],
			'spreadable arraylike works: receiver'
		);
		st.deepEqual(
			concat([], spreadableArrayLike),
			[9, 0],
			'spreadable arraylike works: argument'
		);

		st.deepEqual(
			concat(array, sparseArray, nonSpreadableArray, arrayLike, spreadableArrayLike),
			[1, 2, 3, , undefined, 4, nonSpreadableArray, arrayLike, 9, 0], // eslint-disable-line no-sparse-arrays
			'megacombo works'
		);

		st.test('poisoned getter', { skip: !supportsDescriptors }, function (s2t) {
			var spreadableHasPoisonedIndex = { length: MAX_SAFE_INTEGER };
			spreadableHasPoisonedIndex[Symbol.isConcatSpreadable] = true;
			Object.defineProperty(spreadableHasPoisonedIndex, 0, {
				get: function () { throw new SyntaxError(); }
			});

			s2t['throws'](
				function () { concat([], spreadableHasPoisonedIndex); },
				SyntaxError,
				'[].concat(spreadableHasPoisonedIndex) throws by getting index 0'
			);

			s2t.end();
		});

		st.end();
	});
};
