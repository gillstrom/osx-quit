# osx-quit [![Build Status](https://travis-ci.org/gillstrom/osx-quit.svg?branch=master)](https://travis-ci.org/gillstrom/osx-quit)

> Quit an application in OS X


## Install

```
$ npm install --save osx-quit
```


## Usage

```js
var osxQuit = require('osx-quit');

osxQuit('Safari', function (err) {
	console.log('Safari quit successfully');
});
```


## CLI

```
$ npm install --global osx-quit
```

```
$ osx-quit --help

  Usage
    $ osx-quit <app-name>
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
