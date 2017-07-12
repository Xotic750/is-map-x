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
