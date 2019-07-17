import gOPD from 'object-get-own-property-descriptor-x';
import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';

/** @type {BooleanConstructor} */
const castBoolean = true.constructor;

let getSize;

if (typeof Map === 'function') {
  /* eslint-disable-next-line compat/compat */
  const descriptor = gOPD(Map.prototype, 'size');

  if (descriptor && typeof descriptor.get === 'function') {
    let res = attempt(() => {
      /* eslint-disable-next-line compat/compat */
      return new Map();
    });

    if (res.threw === false && isObjectLike(res.value)) {
      res = attempt.call(res.value, descriptor.get);

      if (res.threw === false && isLength(res.value)) {
        getSize = descriptor.get;
      }
    }
  }
}

/**
 * Determine if an `object` is a `Map`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Map`,
 *  else `false`.
 */
const isMap = function isMap(object) {
  if (castBoolean(getSize) === false || isObjectLike(object) === false) {
    return false;
  }

  const result = attempt.call(object, getSize);

  return result.threw === false && isLength(result.value);
};

export default isMap;
