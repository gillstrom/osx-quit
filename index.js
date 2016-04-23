'use strict';
const runApplescript = require('run-applescript');

module.exports = app => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new TypeError('Expected name of an app'));
	}

	return runApplescript(`quit app "${app}"`);
};
