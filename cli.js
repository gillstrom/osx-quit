#!/usr/bin/env node
'use strict';
const meow = require('meow');
const osxQuit = require('./');

const cli = meow(`
	Usage
	  $ osx-quit <app-name>
`);

if (cli.input.length === 0) {
	console.error('Application is required');
	process.exit(1);
}

osxQuit(cli.input[0]).then(() => console.log(`${cli.input[0]} quit successfully`));
