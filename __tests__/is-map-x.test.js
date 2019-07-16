import isMap from '../src/is-map-x';

let hasMap = typeof Map === 'function';

if (hasMap) {
  try {
    const getSize = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new Map()), 'size').get;

    if (typeof getSize.call(new Map()) !== 'number') {
      // noinspection ExceptionCaughtLocallyJS
      throw new TypeError('not a number');
    }
  } catch (ignore) {
    hasMap = false;
  }
}

const ifHasMap = hasMap ? it : xit;

describe('isMap', function() {
  it('basic', function() {
    expect.assertions(7);
    expect(isMap(undefined)).toBe(false);
    expect(isMap(null)).toBe(false);
    expect(isMap(1)).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap('abc')).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap({})).toBe(false);
  });

  ifHasMap('hasMap', function() {
    expect.assertions(1);
    expect(isMap(new Map())).toBe(true);
  });
});
