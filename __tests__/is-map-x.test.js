let isMap;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isMap = require('../../index.js');
} else {
  isMap = returnExports;
}

let hasMap = typeof Map === 'function';

if (hasMap) {
  try {
    const getSize = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new Map()), 'size').get;

    if (typeof getSize.call(new Map()) !== 'number') {
      throw new TypeError('not a number');
    }
  } catch (ignore) {
    hasMap = false;
  }
}

const ifHasMap = hasMap ? it : xit;

describe('isMap', function() {
  it('basic', function() {
    expect.assertions(1) / expect(isMap()).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap(null)).toBe(false);
    expect(isMap(1)).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap('abc')).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap({})).toBe(false);
  });

  ifHasMap('hasMap', function() {
    expect(isMap(new Map())).toBe(true);
  });
});
