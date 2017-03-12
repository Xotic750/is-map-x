/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, xit, it, returnExports */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isMap;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    isMap = require('../../index.js');
  } else {
    isMap = returnExports;
  }

  var hasMap = typeof Map === 'function';
  if (hasMap) {
    try {
      var getSize = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(new Map()),
        'size'
      ).get;
      if (typeof getSize.call(new Map()) !== 'number') {
        throw new TypeError('not a number');
      }
    } catch (ignore) {
      hasMap = false;
    }
  }

  var ifHasMap = hasMap ? it : xit;

  describe('isMap', function () {
    it('basic', function () {
      expect(isMap()).toBe(false);
      expect(isMap(undefined)).toBe(false);
      expect(isMap(null)).toBe(false);
      expect(isMap(1)).toBe(false);
      expect(isMap(true)).toBe(false);
      expect(isMap('abc')).toBe(false);
      expect(isMap([])).toBe(false);
      expect(isMap({})).toBe(false);
    });

    ifHasMap('hasMap', function () {
      expect(isMap(new Map())).toBe(true);
    });
  });
}());
