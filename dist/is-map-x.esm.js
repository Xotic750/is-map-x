import gOPD from 'object-get-own-property-descriptor-x';
import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';

var test1 = function test1() {
  return attempt(function createMap() {
    /* eslint-disable-next-line compat/compat */
    return new Map();
  });
};

var x = function x() {
  if (typeof Map === 'function') {
    /* eslint-disable-next-line compat/compat */
    var descriptor = gOPD(Map.prototype, 'size');

    if (descriptor && typeof descriptor.get === 'function') {
      var resTest1 = test1();

      if (resTest1.threw === false && isObjectLike(resTest1.value)) {
        var res = attempt.call(resTest1.value, descriptor.get);

        if (res.threw === false && isLength(res.value)) {
          return descriptor.get;
        }
      }
    }
  }
  /* eslint-disable-next-line no-void */


  return void 0;
};

var getSize = x();
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var isMap = function isMap(object) {
  if (!getSize || isObjectLike(object) === false) {
    return false;
  }

  var result = attempt.call(object, getSize);
  return result.threw === false && isLength(result.value);
};

export default isMap;

//# sourceMappingURL=is-map-x.esm.js.map