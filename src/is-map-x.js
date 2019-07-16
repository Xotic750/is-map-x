/**
 * @file Detect whether or not an object is an ES6 Map.
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-map-x
 */

import isFalsey from 'is-falsey-x';

let attempt;
let isObjectLike;
let isLength;
let getSize;

if (typeof Map === 'function') {
  const descriptor = require('object-get-own-property-descriptor-x')(Map.prototype, 'size');

  if (descriptor && typeof descriptor.get === 'function') {
    attempt = require('attempt-x');
    isObjectLike = require('is-object-like-x');
    let res = attempt(function() {
      return new Map();
    });

    if (res.threw === false && isObjectLike(res.value)) {
      isLength = require('is-length-x');
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
 * @example
 * var isMap = require('is-map-x');
 * var m = new Map();
 *
 * isMap([]); // false
 * isMap(true); // false
 * isMap(m); // true
 */
export default function isMap(object) {
  if (isFalsey(getSize) || isObjectLike(object) === false) {
    return false;
  }

  const result = attempt.call(object, getSize);

  return result.threw === false && isLength(result.value);
}
