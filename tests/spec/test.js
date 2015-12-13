/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:3,
  maxstatements:19, maxcomplexity:7 */

/*global expect, module, require, describe, xit, it, returnExports */

(function () {
  'use strict';

  var isMap, hasMap, ifHasMap, getSize;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    isMap = require('../../index.js');
  } else {
    isMap = returnExports;
  }

  hasMap = typeof Map === 'function';
  if (hasMap) {
    try {
      getSize = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(new Map()),
        'size'
      ).get;
      if (typeof getSize.call(new Map()) !== 'number') {
        throw 'not a number';
      }
    } catch (ignore) {
      hasMap = false;
    }
  }

  ifHasMap = hasMap ? it : xit;

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
