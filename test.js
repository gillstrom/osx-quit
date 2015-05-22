'use strict';

var test = require('ava');
var osxQuit = require('./');

test('quit', function (t) {
	t.plan(1);

	osxQuit('Safari', function (err) {
		t.assert(!err, err);
	});
});
