#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osxQuit = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ osx-quit <app-name>'
	].join('\n')
});

if (!cli.input.length) {
	console.error('Application is required');
	process.exit(1);
}

osxQuit(cli.input[0], function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(cli.input[0] + ' quit successfully');
});
