import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';
import call from 'simple-call-x';
import getGetter from 'util-get-getter-x';

var creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new Map();
};

var getSize = getGetter(creator, 'size', isLength);
/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */

var isMap = function isMap(object) {
  if (getSize === null || isObjectLike(object) === false) {
    return false;
  }

  var result = attempt(function attemptee() {
    return call(getSize, object);
  });
  return result.threw === false && isLength(result.value);
};

export default isMap;

//# sourceMappingURL=is-map-x.esm.js.map