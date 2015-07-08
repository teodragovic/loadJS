/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function () {
	"use strict";

	function loadJS( src, cb ){
		var ref = window.document.getElementsByTagName( "script" )[ 0 ];
		var script = window.document.createElement( "script" );
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore( script, ref );
		if (cb && typeof(cb) === "function") {
			script.onload = cb;
		}
		return script;
	}

	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(function () {
			return loadJS;
		});
	} else if (typeof exports === "object") {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = loadJS;
	} else {
		// Browser globals
		window.loadJS = loadJS;
	}

})();
