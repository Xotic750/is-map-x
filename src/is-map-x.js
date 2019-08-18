import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';
import call from 'simple-call-x';
import getGetter from 'util-get-getter-x';

const creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new Map();
};

const getSize = getGetter(creator, 'size', isLength);

/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */
const isMap = function isMap(object) {
  if (getSize === null || isObjectLike(object) === false) {
    return false;
  }

  const result = attempt(function attemptee() {
    return call(getSize, object);
  });

  return result.threw === false && isLength(result.value);
};

export default isMap;
