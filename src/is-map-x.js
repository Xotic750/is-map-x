import gOPD from 'object-get-own-property-descriptor-x';
import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';

const test1 = function test1() {
  return attempt(function createMap() {
    /* eslint-disable-next-line compat/compat */
    return new Map();
  });
};

const getFromDescriptor = function getFromDescriptor(descriptor) {
  const resTest1 = test1();

  if (resTest1.threw === false && isObjectLike(resTest1.value)) {
    const res = attempt.call(resTest1.value, descriptor.get);

    if (res.threw === false && isLength(res.value)) {
      return descriptor.get;
    }
  }

  return null;
};

const getGetter = function getGetter() {
  if (typeof Map === 'function') {
    /* eslint-disable-next-line compat/compat */
    const descriptor = gOPD(Map.prototype, 'size');

    if (descriptor && typeof descriptor.get === 'function') {
      const getter = getFromDescriptor(descriptor);

      if (getter !== null) {
        return getter;
      }
    }
  }

  return null;
};

const getSize = getGetter();

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

  const result = attempt.call(object, getSize);

  return result.threw === false && isLength(result.value);
};

export default isMap;
