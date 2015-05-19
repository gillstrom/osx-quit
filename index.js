'use strict';
var applescript = require('applescript');

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X are supported');
	}

	if (typeof app !== 'string') {
		throw new TypeError('Expected name of an app');
	}

	applescript.execString('quit app "' + app + '"', function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null);
	});
};
